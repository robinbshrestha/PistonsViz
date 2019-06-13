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

(function () {
    let width = 600,
    height = 600;

    let svg = d3.select("#chart")
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


    let circles = svg.selectAll("player")
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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map