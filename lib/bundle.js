/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/bubbles.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/bubbles.js":
/*!************************!*\
  !*** ./lib/bubbles.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function createBubbleChart(error, datapoints) {
    debugger
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
        debugger
        svg = d3.select("#chart")
            .append("svg")
            .attr("height", height)
            .attr("width", width)
    }

    function createDEF() {
        debugger
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
        debugger
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
        debugger
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
        debugger
        addListener("#gsw", forces.gsw)
        addListener("#det", forces.det)

        function addListener(selector, forces) {
            d3.select(selector).on("click", function () {
                updateForces(forces)
            });
        }

        function updateForces(forces) {
            debugger
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
        debugger
        var forceStrength = 0.05;

        forces = {
            gsw: createCombineForces(),
            det: createCountryCenterForces()
        };

    function createCountryCenterForces() {
        debugger
        return {
            x: d3.forceX(combineForceX).strength(forceStrength),
            y: d3.forceY(combineForceY).strength(forceStrength)
        }

        function combineForceX(d) {
            debugger
            if (d.team === "det") {
                return (width * .9)
            } else if (d.team) {
                return (width / 2)
            }
        }

        function combineForceY(d) {
            debugger
            if (d.team === "det") {
                return (height * .9)
            } else if (d.team) {
                return (height / 2)
            }
        }
    }

        function createCombineForces() {
            debugger
            return {
                x: d3.forceX(combineForceX).strength(forceStrength),
                y: d3.forceY(combineForceY).strength(forceStrength)
            }
        
            function combineForceX(d) {
                debugger
                if (d.team === "gsw") {
                    return (width / 8)
                } else if (d.team) {
                    return (width / 2)
                }
            }

            function combineForceY(d) {
                debugger
                if (d.team === "gsw") {
                    return (height / 8)
                } else if (d.team) {
                    return (height / 2)
                }
            }
        }
    }

    function createForceSimulation() {
        debugger
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
    debugger
    d3.queue() //pulling in data
        .defer(d3.csv, "pistons_data.csv")
        .await(createBubbleChart)
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map