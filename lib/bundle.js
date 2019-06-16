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

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const tor = [{
    "Team": "TOR",
    "Player": "Kawhi Leonard",
    "MP": 243,
    "TRB": 59,
    "AST": 25,
    "STL": 12,
    "BLK": 7,
    "TOV": 18,
    "PTS": 171,
    "ptsg": 30.5,
    "trb": 9.1,
    "ast": 3.9,
    "image_path": "images/kawhi-leonard.jpg"
  },
  {
    "Team": "TOR",
    "Player": "Pascal Siakam",
    "MP": 241,
    "TRB": 45,
    "AST": 22,
    "STL": 3,
    "BLK": 4,
    "TOV": 9,
    "PTS": 119,
    "ptsg": 19.0,
    "trb": 7.1,
    "ast": 2.8,
    "image_path": "images/pascal-siakam.jpg"
  },
  {
    "Team": "TOR",
    "Player": "Kyle Lowry",
    "MP": 229,
    "TRB": 24,
    "AST": 43,
    "STL": 10,
    "BLK": 3,
    "TOV": 15,
    "PTS": 97,
      "ptsg": 15.0,
      "trb": 6.6,
      "ast": 4.9,
      "image_path": "images/kyle-lowry.jpg"
  },
  {
    "Team": "TOR",
    "Player": "Fred VanVleet",
    "MP": 195,
    "TRB": 16,
    "AST": 13,
    "STL": 7,
    "BLK": 0,
    "TOV": 6,
    "PTS": 84,
      "ptsg": 8.0,
      "trb": 1.8,
      "ast": 2.6,
      "image_path": "images/fred-vanvleet.jpg"
  },
  {
    "Team": "TOR",
    "Player": "Marc Gasol",
    "MP": 173,
    "TRB": 44,
    "AST": 16,
    "STL": 3,
    "BLK": 2,
    "TOV": 7,
    "PTS": 72,
      "ptsg": 9.4,
      "trb": 6.4,
      "ast": 3.0,
      "image_path": "images/marc-gasol.jpg"
  },
  {
    "Team": "TOR",
    "Player": "Serge Ibaka",
    "MP": 116,
    "TRB": 31,
    "AST": 6,
    "STL": 5,
    "BLK": 10,
    "TOV": 8,
    "PTS": 68,
      "ptsg": 9.4,
      "trb": 6.0,
      "ast": 0.9,
      "image_path": "images/serge-ibaka.jpg"
  },
  {
    "Team": "TOR",
    "Player": "Danny Green",
    "MP": 163,
    "TRB": 21,
    "AST": 7,
    "STL": 7,
    "BLK": 3,
    "TOV": 8,
    "PTS": 44,
      "ptsg": 6.9,
      "trb": 3.6,
      "ast": 1.1,
      "image_path": "images/danny-green.jpg"
  },
  {
    "Team": "TOR",
    "Player": "Norman Powell",
    "MP": 66,
    "TRB": 6,
    "AST": 4,
    "STL": 2,
    "BLK": 0,
    "TOV": 2,
    "PTS": 11,
      "ptsg": 6.5,
      "trb": 2.2,
      "ast": 1.1,
      "image_path": "images/norman-powell.jpg"
  // },
  // {
  //   "Team": "TOR",
  //   "Player": "Patrick McCaw",
  //   "MP": 12,
  //   "TRB": 0,
  //   "AST": 2,
  //   "STL": 0,
  //   "BLK": 0,
  //   "TOV": 0,
  //   "PTS": 3
  // },
  // {
  //   "Team": "TOR",
  //   "Player": "Jeremy L",
  //   "MP": 1,
  //   "TRB": 0,
  //   "AST": 0,
  //   "STL": 0,
  //   "BLK": 0,
  //   "TOV": 0,
  //   "PTS": 0
  // },
  // {
  //   "Team": "TOR",
  //   "Player": "Jodie Meeks",
  //   "MP": 1,
  //   "TRB": 0,
  //   "AST": 0,
  //   "STL": 0,
  //   "BLK": 0,
  //   "TOV": 0,
  //   "PTS": 0
  // },
  // {
  //   "Team": "TOR",
  //   "Player": "Malcolm Miller",
  //   "MP": 1,
  //   "TRB": 0,
  //   "AST": 0,
  //   "STL": 0,
  //   "BLK": 0,
  //   "TOV": 0,
  //   "PTS": 0
  // },
  // {
  //   "Team": "TOR",
  //   "Player": "Team Totals",
  //   "MP": 1440,
  //   "TRB": 246,
  //   "AST": 138,
  //   "STL": 49,
  //   "BLK": 29,
  //   "TOV": 73,
  //   "PTS": 669
  }]

const gsw =
  [{
        "Team": "GSW",
        "Player": "Stephen Curry",
        "MP": 250,
        "TRB": 31,
        "AST": 36,
        "STL": 9,
        "BLK": 1,
        "TOV": 17,
        "PTS": 183
    },
    {
        "Team": "GSW",
        "Player": "Klay Thompson",
        "MP": 188,
        "TRB": 24,
        "AST": 12,
        "STL": 4,
        "BLK": 0,
        "TOV": 6,
        "PTS": 130
    },
    {
        "Team": "GSW",
        "Player": "Draymond Green",
        "MP": 248,
        "TRB": 65,
        "AST": 56,
        "STL": 10,
        "BLK": 6,
        "TOV": 30,
        "PTS": 75
    },
    {
        "Team": "GSW",
        "Player": "Andre Iguodala",
        "MP": 188,
        "TRB": 27,
        "AST": 24,
        "STL": 6,
        "BLK": 9,
        "TOV": 9,
        "PTS": 55
    },
    {
        "Team": "GSW",
        "Player": "DeMarcus Cousins",
        "MP": 108,
        "TRB": 28,
        "AST": 14,
        "STL": 4,
        "BLK": 6,
        "TOV": 13,
        "PTS": 50
    },
    {
        "Team": "GSW",
        "Player": "Quinn Coo",
        "MP": 88,
        "TRB": 5,
        "AST": 5,
        "STL": 1,
        "BLK": 1,
        "TOV": 2,
        "PTS": 29
    },
    {
        "Team": "GSW",
        "Player": "Kevon Looney",
        "MP": 104,
        "TRB": 16,
        "AST": 6,
        "STL": 2,
        "BLK": 1,
        "TOV": 5,
        "PTS": 29
    },
    {
        "Team": "GSW",
        "Player": "Shaun Livingston",
        "MP": 98,
        "TRB": 9,
        "AST": 9,
        "STL": 4,
        "BLK": 1,
        "TOV": 5,
        "PTS": 28
    },
    {
        "Team": "GSW",
        "Player": "Jonas Jerebko",
        "MP": 26,
        "TRB": 5,
        "AST": 1,
        "STL": 0,
        "BLK": 0,
        "TOV": 0,
        "PTS": 14
    },
    {
        "Team": "GSW",
        "Player": "Alfonzo McKinnie",
        "MP": 57,
        "TRB": 10,
        "AST": 2,
        "STL": 0,
        "BLK": 0,
        "TOV": 3,
        "PTS": 13
    },
    {
        "Team": "GSW",
        "Player": "Andrew Bogut",
        "MP": 45,
        "TRB": 15,
        "AST": 3,
        "STL": 1,
        "BLK": 1,
        "TOV": 2,
        "PTS": 12
    },
    {
        "Team": "GSW",
        "Player": "Kevin Durant",
        "MP": 12,
        "TRB": 2,
        "AST": 0,
        "STL": 0,
        "BLK": 1,
        "TOV": 1,
        "PTS": 11
    },
    {
        "Team": "GSW",
        "Player": "Jordan Bel",
        "MP": 25,
        "TRB": 5,
        "AST": 1,
        "STL": 0,
        "BLK": 2,
        "TOV": 0,
        "PTS": 6
    },
    {
        "Team": "GSW",
        "Player": "Jacob Evans",
        "MP": 2,
        "TRB": 0,
        "AST": 0,
        "STL": 0,
        "BLK": 0,
        "TOV": 0,
        "PTS": 0
    },
    {
        "Team": "GSW",
        "Player": "Damian Jones",
        "MP": 2,
        "TRB": 0,
        "AST": 0,
        "STL": 0,
        "BLK": 0,
        "TOV": 0,
        "PTS": 0
    },
    {
        "Team": "GSW",
        "Player": "Team Totals",
        "MP": 1440,
        "TRB": 242,
        "AST": 169,
        "STL": 41,
        "BLK": 29,
        "TOV": 93,
        "PTS": 635
    }
]

/* harmony default export */ __webpack_exports__["default"] = (tor);

/***/ }),

/***/ "./lib/bubbles.js":
/*!************************!*\
  !*** ./lib/bubbles.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./data.js");


Basketball();

function Basketball() {

    const svg = d3.select('svg');
    const svgContainer = d3.select('#container');
    const margin = 80;
    const width = 1000 - 2 * margin;
    const height = 600 - 2 * margin;
    const chart = svg.append('g')
        .attr('transform', `translate(${margin}, ${margin})`);
    const xScale = d3.scaleBand()
        .range([0, width])
        .domain(_data__WEBPACK_IMPORTED_MODULE_0__["default"].map((d) => d.Player))
        .padding(0.4)

    const yScale = d3.scaleLinear()
        .range([height, 0])
        .domain([0, 180]);

    const makeYLines = () => d3.axisLeft()
        .scale(yScale)

    chart.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale));

    chart.append('g')
        .call(d3.axisLeft(yScale));

    chart.append('g')
        .attr('class', 'grid')
        .call(makeYLines()
            .tickSize(-width, 0, 0)
            .tickFormat('')
        )

    const barChart = chart.selectAll()
        .data(_data__WEBPACK_IMPORTED_MODULE_0__["default"])
        .enter()
        .append('g')

    barChart.append('rect')
        .attr('class', 'bar')
        .attr('x', (d) => xScale(d.Player))
        .attr('y', (d) => yScale(d.PTS))
        .attr('height', (d) => height - yScale(d.PTS))
        .attr('width', xScale.bandwidth())
        .on('mouseover', function (actual, i) {
            d3.selectAll('.PTS')
                .attr('opacity', 0)

            d3.select(this)
                .transition()
                .duration(300)
                .attr('opacity', 0.6)
                .attr('x', (d) => xScale(d.Player) - 5)
                .attr('width', xScale.bandwidth() + 10)

            const y = yScale(actual.PTS)

            chart.append('line')
                .attr('id', 'limit')
                .attr('x1', 0)
                .attr('y1', y)
                .attr('x2', width)
                .attr('y2', y)

            barChart.append('text')
                .attr('class', 'differential')
                .attr('x', (d) => xScale(d.Player) + xScale.bandwidth() / 2)
                .attr('y', (d) => yScale(d.PTS) + 20)
                .attr('fill', 'white')
                .attr('text-anchor', 'middle')
                .text((d, idx) => {
                    const differential = (d.PTS - actual.PTS).toFixed(0)

                    let text = ''
                    if (differential > 0) text += '+'
                    text += `${differential} pts`

                    return idx !== i ? text : '';
                })

        })
        .on('mouseout', function () {
            d3.selectAll('.PTS')
                .attr('opacity', 1)

            d3.select(this)
                .transition()
                .duration(300)
                .attr('opacity', 1)
                .attr('x', (d) => xScale(d.Player))
                .attr('width', xScale.bandwidth())

            chart.selectAll('#limit').remove()
            chart.selectAll('.differential').remove()
        })

    barChart.append('text')
        .attr('class', 'PTS')
        .attr('x', (d) => xScale(d.Player) + xScale.bandwidth() / 2)
        .attr('y', (d) => yScale(d.PTS) + 20)
        .attr('text-anchor', 'middle')
        .text((d) => `${d.PTS} pts`)

    svg.append('text')
        .attr('class', 'label')
        .attr('x', -(height / 2) - margin)
        .attr('y', margin / 2.4)
        .attr('transform', 'rotate(-90)')
        .attr('text-anchor', 'middle')
        .text('Total Points Scored')

    svg.append('text')
        .attr('class', 'label')
        .attr('x', width / 2 + margin)
        .attr('y', height + margin * 1.7)
        .attr('text-anchor', 'middle')
        .text('Players')

    svg.append('text')
        .attr('class', 'title')
        .attr('x', width / 2 + margin)
        .attr('y', 40)
        .attr('text-anchor', 'middle')
        .text('2019 NBA Finals Total Points By Player')
        


    svg.append('text')
        .attr('class', 'source')
        .attr('x', width - margin)
        .attr('y', height + margin * 1.72)
        .attr('text-anchor', 'start')
        .text('Source: http://www.sports-reference.com')

    let defs;
    let forces;
    let forceSimulation;
    let radiusScale = d3.scaleSqrt().domain([0, 300]).range([0, 150]);
    defs = svg.append("defs");
    defs.append("pattern")
        .attr("height", "100%")
        .attr("width", "100%")
        .attr("patternContentUnits", "objectBoundingBox")
        .append("image")
        .attr("height", 1)
        .attr("width", 1)
        .attr("preserveAspectRatio", "none")

    defs.selectAll("player-pattern")
        .data(_data__WEBPACK_IMPORTED_MODULE_0__["default"])
        .enter()
        .append("pattern")
        .attr("class", "player-pattern")
        .attr("id", function (d) {
            return d.Player.toLowerCase().replace(" ", "-")
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

    let simulation = d3.forceSimulation() //takes the circles and applies forces to them to go in a certain place
        .force("x", d3.forceX(width).strength(0.05)) //pushes them left to right
        .force("y", d3.forceY(height / 3).strength(0.05)) //pushes them down
        .force("collide", d3.forceCollide(function (d) { //does not allow the bubbles to collide based on the radius you give it
            return radiusScale(d.ptsg) + 7; //+1 will add spacing between the bubbles so that as the circle gets bigger the collision force gets bigger
        }))

    let circles = svg.selectAll(".player") //node and circles are synonymous
        .data(_data__WEBPACK_IMPORTED_MODULE_0__["default"]) //for everysingle datapoint
        .enter().append("circle") //we draw a circle
        .attr("class", "player")
        .attr("r", function (d) { //radius of the value
            return radiusScale(d.ptsg);
        })
        .attr("fill", function (d) { //fill it with the url with their name and replace a space with a dash
            return "url(#" + d.Player.toLowerCase().replace(" ", "-") + ")";
        })
        // .attr("fill", function (d) { //fill it with the url with their name and replace a space with a dash
        //     return "url(#" + d.name.toLowerCase().replace(" ", "-") + ")";
        // })
        .on('click', function (d) {
            let xPos = d3.mouse(this)[0] - 250;
            let yPos = d3.mouse(this)[1];
            tooltip.attr("transform", "translate(" + xPos + "," + yPos + ")")
            tooltip.select("text").text(d.Player + " " + d.trb + " reb/game")

        })

        .on('dblclick', function (d) {
            let xPos = d3.mouse(this)[0] - 250;
            let yPos = d3.mouse(this)[1];
            tooltip.attr("transform", "translate(" + xPos + "," + yPos + ")")
            tooltip.select("text").text(d.Player + " " + d.ast + " ast/game")

        })

        .on("mouseover", function () {
            tooltip.style("display", null);
        })

        .on("mouseout", function () {
            tooltip.style("display", "none");
        })

        .on("mousemove", function (d) {
            let xPos = d3.mouse(this)[0] - 250;
            let yPos = d3.mouse(this)[1];
            tooltip.attr("transform", "translate(" + xPos + "," + yPos + ")")
            tooltip.select("text").text(d.Player + " " + d.ptsg + " pts/game")
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

    simulation.nodes(_data__WEBPACK_IMPORTED_MODULE_0__["default"]) // simulation is like a clock, for every sec, it updates the position of the circles for every node
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


/* harmony default export */ __webpack_exports__["default"] = (Basketball);





/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map