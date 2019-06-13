//this returns a function that will instantiate a new chart given a DOM element to display it in it and a dataset to visualize
(function () {
    //for sizing
    let width = 600,
    height = 600;

    let svg = d3.select("#chart") //from the div
        .append("svg")
        .attr("height", height)
        .attr("width", width)
        .append("g")
        .attr("transform", "translate(0,0)")
    


        let defs = svg.append("defs");
        defs.append("pattern")
            .attr("height", "100%")
            .attr("width", "100%")
            .attr("patternContentUnits", "objectBoundingBox")
            .append("image")
            .attr("height", 1)
            .attr("width", 1)
            .attr("preserveAspectRatio", "none")

            //sizing of the bubbles based on their data
    let radiusScale = d3.scaleSqrt().domain([0, 300]).range([0, 150])

            //the simulation is a collection of forces about where we want our circles to go and how we want our circles to interact
    let simulation = d3.forceSimulation() //takes the circles and applies forces to them to go in a certain place
        .force("x", d3.forceX(width / 2).strength(0.07)) //pushes them left to right
        .force("y", d3.forceY(height / 2).strength(0.07)) //pushes them down
        .force("collide", d3.forceCollide(function(d) { //does not allow the bubbles to collide based on the radius you give it
            return radiusScale(d.mp) + 1; //+1 will add spacing between the bubbles so that as the circle gets beigger the collision force gets bigger
        })) 

    d3.queue() //pulling in data
        .defer(d3.csv, "pistons_data.csv")
        .await(ready);

function ready (error, datapoints) {
    defs.selectAll("player-pattern")
        .data(datapoints)
        .enter().append("pattern")
        .attr("class", "player-pattern")
        .attr("id", function (d) {
            return d.name.toLowerCase().replace(" ", "-")
        })
        .attr("height", "100%")
        .attr("width", "100%")
        .attr("patternContentUnits", "objectBoundingBox")
        .append("image")
        .attr("height", 1)
        .attr("width", 1)
        .attr("preserveAspectRatio", "none")
        .attr("xlink:href", function (d) {
            return d.image_path
        })

        //draw circles
    let circles = svg.selectAll(".player") //node and circles are synonymous
        .data(datapoints) //for everysingle datapoint
        .enter().append("circle") //we draw a circle
        .attr("class", "player")
        .attr("r", function(d) { //radius of the value
            return radiusScale(d.mp);
        }) 
        .attr("fill", function(d) { //fill it with the url with their name and replace a space with a dash
            return "url(#" + d.name.toLowerCase().replace(" ", "-") + ")"
        })
        .on('click', function(d) { 
            console.log(d)
           
        })
        
        .on("mouseover", function () {
            tooltip.style("display", null);
        })

        .on("mouseout", function () {
            tooltip.style("display", "none");
        })

        .on("mousemove", function (d) {
            let xPos = d3.mouse(this)[0] - 15;
            let yPos = d3.mouse(this)[1] - 55;
            tooltip.attr("transform", "translate(" + xPos + "," + yPos + ")")
            tooltip.select("text").text(d.name)
        });

    var tooltip = svg.append("g")
        .attr("class", tooltip)
        .style("display", "none")

    tooltip.append("text")
        .attr("x", 15)
        .attr("dy", "1.2em")
        .style("font-size", "1.25em")
        .attr("font-weight", "bold")
                

        //from the simulation variable above
    simulation.nodes(datapoints) // simulation is like a clock, for every sec, it updates the position of the circles for every node
        .on('tick', ticked)

    function ticked() { //everytime this function is called it will grab the circles and set their cx and cy
        circles
            .attr("cx", function(d) {
                return d.x
            })
            .attr("cy", function (d) {
                return d.y
            })
        
    }
}
})();