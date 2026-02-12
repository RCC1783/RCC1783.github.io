import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";



function makeVis(){
    const width = 1000;
    const height = 800;
    const svg = d3.create("svg").attr("width", width).attr("height", height);

    const visContainer = document.querySelector('#visContainer');

    visContainer.append(svg.node());

    const circle = svg.append("circle");

    circle.attr('r', 15)
    .attr('cx', 25)
    .attr('cy', 25)
    .attr('fill', "blue");

    const dataset = [15, 20, 16, 45, 6, 32, 10, 25];

    dataset.forEach((d, i) => {
        svg.append('circle')
        .attr('r', d)
        .attr('cx', i*100 + 50)
        .attr('cy', width/2);
    })
}

makeVis();