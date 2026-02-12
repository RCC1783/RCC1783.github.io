// https://douiri.org/blog/range-mapping/
function map(value, sourceStart, sourceEnd, targetStart, targetEnd) {
    return (value - sourceStart) / (sourceEnd - sourceStart) * (targetEnd - targetStart) + targetStart
}

// Experimenting visualizations
setInterval(function() {

    const screentimeGraph = document.getElementById('screentime');

    const screentimes = [288, 473, 495, 633, 823, 367, 420];

    for(var i = 0; i < screentimes.length; i++){
        const day = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

        day.setAttribute('height', 50);
        day.setAttribute('width', map(screentimes[i], 0, 830, 0, screentimeGraph.clientWidth));
        day.setAttribute('fill', 'rgb(' + map(screentimes[i], 288, 823, 0, 255) + ',' + map(screentimes[i], 288, 823, 255, 0) + ', 50)');
        day.setAttribute('y', i*70);

        screentimeGraph.appendChild(day);
    }

    

    const mon_txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');

        mon_txt.textContent = 'Monday: 288'
        mon_txt.setAttribute("font-size", 20);
        mon_txt.setAttribute('x', 10);
        mon_txt.setAttribute('y', 32);
        mon_txt.setAttribute('fill', 'white');

        screentimeGraph.appendChild(mon_txt);

    // const tues = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    //     tues.setAttribute('height', 50);
    //     tues.setAttribute('width', map(473, 0, 830, 0, screentimeGraph.clientWidth));
    //     tues.setAttribute('fill', '#d3e017');
    //     tues.setAttribute('y', 70);

    //     screentimeGraph.appendChild(tues);

    const tues_txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');

        tues_txt.textContent = 'Tuesday: 473'
        tues_txt.setAttribute("font-size", 20);
        tues_txt.setAttribute('x', 10);
        tues_txt.setAttribute('y', 102);
        tues_txt.setAttribute('fill', 'white');

        screentimeGraph.appendChild(tues_txt);

    // const wed = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    //     wed.setAttribute('height', 50);
    //     wed.setAttribute('width', map(495, 0, 830, 0, screentimeGraph.clientWidth));
    //     wed.setAttribute('fill', '#e1aa2a');
    //     wed.setAttribute('y', 140);

    //     screentimeGraph.appendChild(wed);

    const wed_txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');

        wed_txt.textContent = 'Wednesday: 495'
        wed_txt.setAttribute("font-size", 20);
        wed_txt.setAttribute('x', 10);
        wed_txt.setAttribute('y', 172);
        wed_txt.setAttribute('fill', 'white');

        screentimeGraph.appendChild(wed_txt);

    // const thurs = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    //     thurs.setAttribute('height', 50);
    //     thurs.setAttribute('width', map(633, 0, 830, 0, screentimeGraph.clientWidth));
    //     thurs.setAttribute('fill', '#de8016');
    //     thurs.setAttribute('y', 210);

    //     screentimeGraph.appendChild(thurs);

    const thurs_txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');

        thurs_txt.textContent = 'Thursday: 633'
        thurs_txt.setAttribute("font-size", 20);
        thurs_txt.setAttribute('x', 10);
        thurs_txt.setAttribute('y', 242);
        thurs_txt.setAttribute('fill', 'white');

        screentimeGraph.appendChild(thurs_txt);

    // const fri = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    //     fri.setAttribute('height', 50);
    //     fri.setAttribute('width', map(823, 0, 830, 0, screentimeGraph.clientWidth));
    //     fri.setAttribute('fill', '#c41434');
    //     fri.setAttribute('y', 280);

    //     screentimeGraph.appendChild(fri);

    const fri_txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');

        fri_txt.textContent = 'Friday: 823'
        fri_txt.setAttribute("font-size", 20);
        fri_txt.setAttribute('x', 10);
        fri_txt.setAttribute('y', 312);
        fri_txt.setAttribute('fill', 'white');

        screentimeGraph.appendChild(fri_txt);

    // const sat = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    //     sat.setAttribute('height', 50);
    //     sat.setAttribute('width', map(367, 0, 830, 0, screentimeGraph.clientWidth));
    //     sat.setAttribute('fill', '#71f208');
    //     sat.setAttribute('y', 350);

    //     screentimeGraph.appendChild(sat);

    const sat_txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');

        sat_txt.textContent = 'Saturday: 367'
        sat_txt.setAttribute("font-size", 20);
        sat_txt.setAttribute('x', 10);
        sat_txt.setAttribute('y', 382);
        sat_txt.setAttribute('fill', 'white');

        screentimeGraph.appendChild(sat_txt);

    // const sun = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    //     sun.setAttribute('height', 50);
    //     sun.setAttribute('width', map(420, 0, 830, 0, screentimeGraph.clientWidth));
    //     sun.setAttribute('fill', '#96f214');
    //     sun.setAttribute('y', 420);

    //     screentimeGraph.appendChild(sun);


    const sun_txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');

        sun_txt.textContent = 'Sunday: 420'
        sun_txt.setAttribute("font-size", 20);
        sun_txt.setAttribute('x', 10);
        sun_txt.setAttribute('y', 452);
        sun_txt.setAttribute('fill', 'white');

        screentimeGraph.appendChild(sun_txt);

    // Artistic svg //
    const artistic = document.getElementById('artistic');

    const shape = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        shape.setAttribute('d', 'M 150,0 100,200 200,200 200,150 50, 125 50,75 250,75 300,0 150,0');
        shape.setAttribute('fill-rule', 'evenodd');
        // shape.setAttribute('stroke', 'orange');
        shape.setAttribute('stroke-width', 6);
        shape.setAttribute('fill', 'cyan');

    artistic.appendChild(shape);

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

        circle.setAttribute('cx', 200);
        circle.setAttribute('cy', 110);
        circle.setAttribute('r', 30);
        circle.setAttribute('fill', 'green');

    artistic.appendChild(circle);

    const circle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

        circle2.setAttribute('cx', 320);
        circle2.setAttribute('cy', 150);
        circle2.setAttribute('r', 100);
        circle2.setAttribute('fill', 'red');

    artistic.appendChild(circle2);

    const circle3 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

        circle3.setAttribute('cx', 250);
        circle3.setAttribute('cy', 250);
        circle3.setAttribute('r', 50);
        circle3.setAttribute('fill', '#1f0a62');

    artistic.appendChild(circle3);

    for(let i = 1; i < 50; i++){
        let cir = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        cir.setAttribute('cx', 250 + Math.cos(i*2)*(2000/i));
        cir.setAttribute('cy', 250 + Math.sin(i*2)*(2000/i));
        cir.setAttribute('r', 300/i);
        cir.setAttribute('fill', '#' + i*14);

        artistic.appendChild(cir);
    }

}, 1500);

// Intro to VegaLite Visualizations

async function fetchData(fileName) {
    const data = await d3.csv(fileName);
    return data;
}

async function render(viewID, spec) {
    const result = await vegaEmbed(viewID, spec);
    result.view.run();
}

fetchData('./data/videogames_wide.csv').then(async (data) => {
    const vlSpec = vl.markCircle()
        .data(data)
        .encode(
            vl.y().fieldO("Platform").sort('Global_Sales'),
            vl.x().fieldO('Genre'),
            vl.size().fieldQ("Global_Sales").aggregate("sum"),
            vl.color().fieldN("Genre"),
            vl.tooltip("Global_Sales").aggregate("sum")
        )
        .width("500")
        .height("600")
        .toSpec();

    const vlSpec2 = vl.markBar()
        .data(data)
        .encode(
            vl.y().fieldQ("Global_Sales").aggregate("sum").title("Global Sales"),
            vl.x().fieldO("Year"),
            vl.color().fieldN("Genre"),
            vl.tooltip("Global_Sales").aggregate("sum")
        ).width("500")
        .height("400")
        .toSpec();

    render("#GbSxPaG", vlSpec);
    render('#SoTxPaG', vlSpec2);
});
// setInterval(() => {
    


// }, 1500);