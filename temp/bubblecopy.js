
(function () {
    let width = 1000,
    height = 1000;

    let svg = d3.select("#chart")
        .append("svg")
        .attr("height", height)
        .attr("width", width)
        .append("g")
        .attr("transform", "translate(0,0)");

        var defs = svg.append("defs");
        defs.append("pattern")
            // .attr("id", "jon-snow")
            .attr("height", "100%")
            .attr("width", "100%")
            .attr("patternContentUnits", "objectBoundingBox")
            .append("image")
            .attr("height", 1)
            .attr("width", 1)
            .attr("preserveAspectRatio", "none")
            // .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
            // // .attr("xlink:href", "snow.jpg");


    var radiusScale = d3.scaleSqrt().domain([1, 300]).range([10, 150])

            //the simulation is a collection of forces about where we want our circles to go and how we want our circles to interact
    var simulation = d3.forceSimulation() //takes the circles and applies forces to them to go in a certain place
        .force("x", d3.forceX(width / 2).strength(0.1)) //pushes them left to right
        .force("y", d3.forceY(height / 2).strength(0.1)) //pushes them down
        .force("collide", d3.forceCollide(function(d) {
            return radiusScale(d.sales) + 1;
        }))
    d3.queue()
        .defer(d3.csv, "sales.csv")
        .await(ready);



function ready (error, datapoints) {

    defs.selectAll(".artist-pattern")
        .data(datapoints)
        .enter().append("pattern")
        .attr("class", "artist-pattern")
        .attr("id", function (d) {
            return d.name.toLowerCase().replace(/ /g, "-")
        })
        .attr("height", "100%")
        .attr("width", "100%")
        .attr("patternContentUnits", "objectBoundingBox")
        .append("image")
        .attr("height", 1)
        .attr("width", 1)
        .attr("preserveAspectRatio", "none")
        // .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
        .attr("xlink:href", function (d) {
            return d.image_path
        });

    let circles = svg.selectAll(".artist")
        .data(datapoints)
        .enter().append("circle")
        .attr("class", "artist")
        .attr("r", function(d) {
            return radiusScale(d.sales);
        }) 
        .attr("fill", function(d) {
            return "url(#" + d.name.toLowerCase().replace(/ /g, "-") + ")"
        })
        .on('click', function(d) { 
            // console.log(d)
           
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