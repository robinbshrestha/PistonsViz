(function () {
    let width = 600,
    height = 600;

    let svg = d3.select("#chart")
        .append("svg")
        .attr("height", height)
        .attr("width", width)
        .append("g")
        .attr("transform", "translate(0,0)");

        let defs = svg.append("defs");
        defs.append("pattern")
            .attr("height", "100%")
            .attr("width", "100%")
            .attr("patternContentUnits", "objectBoundingBox")
            .append("image")
            .attr("height", 1)
            .attr("width", 1)
            .attr("preserveAspectRatio", "none")


    let radiusScale = d3.scaleSqrt().domain([0, 300]).range([0, 150])

            //the simulation is a collection of forces about where we want our circles to go and how we want our circles to interact
    let simulation = d3.forceSimulation() //takes the circles and applies forces to them to go in a certain place
        .force("x", d3.forceX(width / 2).strength(0.1)) //pushes them left to right
        .force("y", d3.forceY(height / 2).strength(0.1)) //pushes them down
        .force("collide", d3.forceCollide(function(d) {
            return radiusScale(d.mp) + 1;
        }))
    d3.queue()
        .defer(d3.csv, "pistons_data.csv")
        .await(ready);



function ready (error, datapoints) {

    defs.selectAll(".player-pattern")
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
        });

    let circles = svg.selectAll(".player")
        .data(datapoints)
        .enter().append("circle")
        .attr("class", "player")
        .attr("r", function(d) {
            return radiusScale(d.mp);
        }) 
        .attr("fill", function(d) {
            return "url(#" + d.name.toLowerCase().replace(" ", "-") + ")"
        })
        .on('click', function(d) { 
            console.log(d)
           
        })

    simulation.nodes(datapoints) // simulation is like a clock, for every sec, it updates the position of the circles for every node
        .on('tick', ticked)
    function ticked() {
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