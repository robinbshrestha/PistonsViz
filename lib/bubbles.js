import tor from '../data'

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
        .domain(tor.map((d) => d.Player))
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
        .data(tor)
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
        .data(tor)
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
        .data(tor) //for everysingle datapoint
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

    simulation.nodes(tor) // simulation is like a clock, for every sec, it updates the position of the circles for every node
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


export default Basketball;



