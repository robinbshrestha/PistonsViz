function createBubbleChart(error, datapoints) {
    let width = 800,
        height = 600;

    let svg;
    let defs;
    let forces;
    let forceSimulation;
    let radiusScale = d3.scaleSqrt().domain([0, 300]).range([0, 150]);
    

    createSVG();
    createDEF();
    createCircles();
    ready();
    createForces();
    addGroupingListeners();
    createForceSimulation();
    // ticked();
    // circles();
    // addFillListener();



    function createSVG() {
        svg = d3.select("#chart")
            .append("svg")
            .attr("height", height)
            .attr("width", width)
    }

    function createDEF() {
        defs = svg.append("defs");
        defs.append("pattern")
            .attr("height", "100%")
            .attr("width", "100%")
            .attr("patternContentUnits", "objectBoundingBox")
            .append("image")
            .attr("height", 1)
            .attr("width", 1)
            .attr("preserveAspectRatio", "none")
    }

    function ready() {
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
            .attr("opacity", 0.75)
            .attr("preserveAspectRatio", "none")
            .attr("xlink:href", function (d) {
                return d.image_path
            })
    }


    function createCircles() {
        // let radiusScale = d3.scaleSqrt().domain([0, 300]).range([0, 150])

        let simulation = d3.forceSimulation() //takes the circles and applies forces to them to go in a certain place
            .force("x", d3.forceX(width / 2).strength(0.05)) //pushes them left to right
            .force("y", d3.forceY(height / 2).strength(0.05)) //pushes them down
            .force("collide", d3.forceCollide(function (d) { //does not allow the bubbles to collide based on the radius you give it
                return radiusScale(d.ptsg) + 1; //+1 will add spacing between the bubbles so that as the circle gets bigger the collision force gets bigger
            }))

        let circles = svg.selectAll(".player") //node and circles are synonymous
            .data(datapoints) //for everysingle datapoint
            .enter().append("circle") //we draw a circle
            .attr("class", "player")
            .attr("r", function (d) { //radius of the value
                return radiusScale(d.ptsg);
            })
            .attr("fill", function (d) { //fill it with the url with their name and replace a space with a dash
                return "url(#" + d.name.toLowerCase().replace(" ", "-") + ")";
            })
            .on('click', function (d) {
                let xPos = d3.mouse(this)[0] - 15;
                let yPos = d3.mouse(this)[1] - 55;
                tooltip.attr("transform", "translate(" + xPos + "," + yPos + ")")
                tooltip.select("text").text(d.name + " " + d.trb + " reb/game")

            })

            .on('dblclick', function (d) {
                let xPos = d3.mouse(this)[0] - 15;
                let yPos = d3.mouse(this)[1] - 55;
                tooltip.attr("transform", "translate(" + xPos + "," + yPos + ")")
                tooltip.select("text").text(d.name + " " + d.ast + " ast/game")

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
                tooltip.select("text").text(d.name + " " + d.ptsg + " pts/game")
            })


        let tooltip = svg.append("g")
            .attr("class", "tooltip")
            .style("display", "none")


        tooltip.append("text")
            .attr("x", 15)
            .attr("dy", "1.2em")
            .style("font-size", "24px")
            .style('fill', 'white')
            .attr("font-weight", "bold")

        //from the simulation variable above

        simulation.nodes(datapoints) // simulation is like a clock, for every sec, it updates the position of the circles for every node
            .on('tick', ticked)

        function ticked() { //everytime this function is called it will grab the circles and set their cx and cy
            circles
                .attr("cx", function (d) {
                    return d.x
                })
                .attr("cy", function (d) {
                    return d.y
                })

        }
    }

    // function addFillListener() {
    //     d3.selectAll('input[name="fill"]')
    //         .on("change", function () {
    //             updateCircles();
    //         });
    // }

    // function updateCircles() {
    //     circles
    //     .attr("fill", function(d) {

    //     })
    // }
 
    function addGroupingListeners() {
        addListener("#gsw", forces.gsw)
        addListener("#det", forces.det)

        function addListener(selector, forces) {
            d3.select(selector).on("click", function () {
                updateForces(forces)
            });
        }

        function updateForces(forces) {
            // let radiusScale = d3.scaleSqrt().domain([0, 300]).range([0, 150])

            forceSimulation
                .force("x", forces.x)
                .force("y", forces.y)
                .force("collide", d3.forceCollide(function (d) {
                    return radiusScale(d.ptsg)
                }))
                .alphaTarget(0.2)
                .restart()

        }

    }

    function ticked() { //everytime this function is called it will grab the circles and set their cx and cy
        circles
            .attr("cx", function (d) {
                return d.x
            })
            .attr("cy", function (d) {
                return d.y
            })
    }

    function circles() {
         svg.selectAll(".player") //node and circles are synonymous
        .data(datapoints) //for everysingle datapoint
        .enter().append("circle") //we draw a circle
        .attr("class", "player")
        .attr("r", function (d) { //radius of the value
            return radiusScale(d.ptsg);
        })
        .attr("fill", function (d) { //fill it with the url with their name and replace a space with a dash
            return "url(#" + d.name.toLowerCase().replace(" ", "-") + ")";
        })
    }
    function createForces() {
        var forceStrength = 0.05;

        forces = {
            gsw: createCombineForces(),
            det: createCountryCenterForces()
        };

    function createCountryCenterForces() {
        return {
            x: d3.forceX(combineForceX).strength(forceStrength),
            y: d3.forceY(combineForceY).strength(forceStrength)
        }

        function combineForceX(d) {
            if (d.team === "det") {
                return (width * .9)
            } else if (d.team) {
                return (width / 2)
            }
        }

        function combineForceY(d) {
            if (d.team === "det") {
                return (height * .9)
            } else if (d.team) {
                return (height / 2)
            }
        }
    }

        function createCombineForces() {
            return {
                x: d3.forceX(combineForceX).strength(forceStrength),
                y: d3.forceY(combineForceY).strength(forceStrength)
            }
        
            function combineForceX(d) {
                if (d.team === "gsw") {
                    return (width / 8)
                } else if (d.team) {
                    return (width / 2)
                }
            }

            function combineForceY(d) {
                if (d.team === "gsw") {
                    return (height / 8)
                } else if (d.team) {
                    return (height / 2)
                }
            }
        }
    }

    function createForceSimulation() {
        // let radiusScale = d3.scaleSqrt().domain([0, 300]).range([0, 150])

        forceSimulation = d3.forceSimulation()
        .force("x", forces.gsw.x)
        .force("y", forces.gsw.y)
        .force("collide", d3.forceCollide(function(d) {
            return radiusScale(d.ptsg)
        }))
        forceSimulation.nodes(datapoints)
            .on("tick", function() {
                circles
                    .attr("cx", function(d) {return d.x})
                    .attr("cy", function(d) {return d.y})
            });

        //
        let circles = svg.selectAll(".player") //node and circles are synonymous
            .data(datapoints) //for everysingle datapoint
            .enter().append("circle") //we draw a circle
            .attr("class", "player")
            .attr("r", function (d) { //radius of the value
                return radiusScale(d.ptsg)
            })
            .attr("fill", function (d) { //fill it with the url with their name and replace a space with a dash
                return "url(#" + d.name.toLowerCase().replace(" ", "-") + ")";
            })
            .on('click', function (d) {
                let xPos = d3.mouse(this)[0] - 15;
                let yPos = d3.mouse(this)[1] - 55;
                tooltip.attr("transform", "translate(" + xPos + "," + yPos + ")")
                tooltip.select("text").text(d.name + " " + d.trb + " reb/game")

            })

            .on('dblclick', function (d) {
                let xPos = d3.mouse(this)[0] - 15;
                let yPos = d3.mouse(this)[1] - 55;
                tooltip.attr("transform", "translate(" + xPos + "," + yPos + ")")
                tooltip.select("text").text(d.name + " " + d.ast + " ast/game")

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
                tooltip.select("text").text(d.name + " " + d.ptsg + " pts/game")
            })


        let tooltip = svg.append("g")
            .attr("class", "tooltip")
            .style("display", "none")


        tooltip.append("text")
            .attr("x", 15)
            .attr("dy", "1.2em")
            .style("font-size", "24px")
            .style('fill', 'white')
            .attr("font-weight", "bold")
            
    }

}

document.addEventListener('DOMContentLoaded', function() {
    d3.queue() //pulling in data
        .defer(d3.csv, "pistons_data.csv")
        .await(createBubbleChart)
});