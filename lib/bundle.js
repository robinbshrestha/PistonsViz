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
    "PTS": 171
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
    "PTS": 119
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
    "PTS": 97
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
    "PTS": 84
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
    "PTS": 72
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
    "PTS": 68
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
    "PTS": 44
  // }
  // {
  //   "Team": "TOR",
  //   "Player": "Norman Powell",
  //   "MP": 66,
  //   "TRB": 6,
  //   "AST": 4,
  //   "STL": 2,
  //   "BLK": 0,
  //   "TOV": 2,
  //   "PTS": 11
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
                .attr('y', (d) => yScale(d.PTS) + 30)
                .attr('fill', 'white')
                .attr('text-anchor', 'middle')
                .text((d, idx) => {
                    const differential = (d.PTS - actual.PTS).toFixed(1)

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
        .attr('y', (d) => yScale(d.PTS) + 30)
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

}

/* harmony default export */ __webpack_exports__["default"] = (Basketball);





/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map