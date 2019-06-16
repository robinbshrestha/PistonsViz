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

}]



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
        .on('mouseenter', function (actual, i) {
        d3.selectAll('.PTS')
            .attr('opacity', 0)

        d3.select(this)
            .transition()
            .duration(300)
            .attr('opacity', 0.6)
            .attr('x', (d) => xScale(d.Player) - 5)
            .attr('width', xScale.bandwidth() + 10)

        const y = yScale(actual.PTS)

        line = chart.append('line')
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
    .on('mouseleave', function () {
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


