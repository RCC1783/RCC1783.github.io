const graphBG = "#fffbed23"

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

fetchData('./data/videogames_long.csv').then(async (data) => {
    const vlSpec = vl.markCircle({tooltip: true})
        .data(data)
        .encode(
            vl.y().fieldO("platform").sort('name'),
            vl.x().fieldO("genre"),
            vl.size().fieldQ("sales_amount").aggregate("sum"),
            vl.color().fieldN("genre"),
        )
        .background(graphBG)
        .width("600")
        .height("800")
        .toSpec();

    render("#vis1", vlSpec);

    const onlyRPGs = data.filter((d) => {
        return d.genre === "Role-Playing"
    });

    {
        const allData = vl.markPoint({tooltip: true})
            .data(onlyRPGs)
            .transform(
            vl.filter()
            )
            .encode(
                vl.y().fieldQ("sales_amount").aggregate("sum"),
                vl.x().fieldO("year"),
                vl.color().fieldN("platform"),
                vl.size().fieldQ("sales_amount").aggregate("sum").scale({type: "sqrt"}),
                // vl.tooltip("name")
            );

        const totalRPG = vl.markArea({tooltip: true})
            .data(onlyRPGs)
            .encode(
                vl.y().fieldQ("sales_amount").aggregate("sum"),
                vl.x().fieldO("year"),
                vl.opacity().value(0.5)
            );

        const vis3 = vl.
            layer(totalRPG, allData)
            .background(graphBG)
            .height(600)
            .width(600)
            .toSpec();
        
        render("#vis3", vis3);
    }

    const Nintendo_xBox = data.filter((d) => {
        return d.platform === "Wii" || d.platform === "X360" || d.platform  === "PS3";
    });

    const vis4 = vl.markArea({tooltip: true})
        .data(Nintendo_xBox)
        .encode(
            vl.column().fieldN("genre"),
            vl.y().field("sales_amount").aggregate("sum"),
            vl.x().fieldO("year"),
            vl.color().fieldN("platform"),
            vl.opacity().value(0.75)
        )
        .background(graphBG)
        .toSpec();
    
    render("#vis4", vis4);



    const vlSpec5 = vl.markCircle({tooltip: true})
        .data(data)
        .encode(
            vl.y().fieldN("platform"),
            vl.x().fieldN("sales_region"),
            vl.color().fieldN("sales_region"),
            vl.size().fieldQ("sales_amount").aggregate("sum").scale("sqrt"),
        ).background(graphBG)
        .width("300")
        .height("800")
        .toSpec();

    render("#vis5", vlSpec5);

    const handheledConsoles = data.filter((d) => {
        return d.platform === "3DS" || d.platform === "DS" || d.platform === "GB" || d.platform === "GBA" || d.platform === "PSP" || d.platform === "PSV" || d.platform === "GG" || d.platform === "WS" 
    });
    const homeConsoles = data.filter((d) => {
        return d.platform !== "3DS" && d.platform !== "DS" && d.platform !== "GB" && d.platform !== "GBA" && d.platform !== "PSP" && d.platform !== "PSV" && d.platform !== "GG" && d.platform !== "WS" && d.year >= 1985;
    });

    {
        const handhelds = vl.markCircle({tooltip: true})
            .data(handheledConsoles)
            .transform(
            vl.filter()
            )
            .encode(
            vl.y().fieldQ("sales_amount").aggregate("sum").title("Sales Amount (millions)"),
            vl.x().fieldN("sales_region"),
            // vl.size().fieldQ("sales_amount").aggregate("sum").scale({type: "pow"}),
            vl.size().value(300),
            vl.color().fieldN("sales_region"),
            vl.opacity().value(0.5)
            );

        const home = vl.markSquare({tooltip: true})
            .data(homeConsoles)
            .encode(
            vl.y().fieldQ("sales_amount").aggregate("sum"),
            vl.x().fieldN("sales_region"),
            // vl.size().fieldQ("sales_amount").aggregate("sum").scale({type: "pow"}),
            vl.size().value(300),
            vl.color().fieldN("sales_region"),
            );

        const vis6 = vl.
            layer(handhelds, home)
            // .title("Handheld vs Home-system Sales by Region After 1985")
            .background(graphBG)
            .height(600)
            .width(300)
            .toSpec();

        render("#vis6", vis6);
        
    } 

});

fetchData('./data/videogames_wide.csv').then(async (data) => {
    
    const vlSpec2 = vl.markArc({ tooltip:true, innerRadius: 800 / 13, padAngle: 0.01, cornerRadius: 10})
        .data(data)
        .encode(
            vl.column().fieldN("Platform"),
            vl.theta().count(),
            vl.color().fieldN("Genre"),
        ).background(graphBG)
        .toSpec();

    const vlSpec3 = vl.markBar({tooltip: true})
        .data(data)
        .encode(
            vl.y().fieldQ("Global_Sales").aggregate("sum").title("Global Sales"),
            vl.x().fieldO("Year"),
            vl.color().fieldN("Genre"),
        ).background(graphBG)
        .width("600")
        .height("400")
        .toSpec();

    
    render('#vis2', vlSpec2);
    render('#vis3', vlSpec3);
});
// setInterval(() => {
    


// }, 1500);