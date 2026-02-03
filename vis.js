const svg = document.getElementById('screentime');

const mon = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    mon.setAttribute('height', 50);
    mon.setAttribute('width', 288);
    mon.setAttribute('fill', '#00f600');

    svg.appendChild(mon);

const mon_txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');

    mon_txt.textContent = 'Monday: 288'
    mon_txt.setAttribute("font-size", 20);
    mon_txt.setAttribute('x', 10);
    mon_txt.setAttribute('y', 32);
    mon_txt.setAttribute('fill', 'white');

    svg.appendChild(mon_txt);

const tues = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    tues.setAttribute('height', 50);
    tues.setAttribute('width', 473);
    tues.setAttribute('fill', '#d3e017');
    tues.setAttribute('y', 70);

    svg.appendChild(tues);

const tues_txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');

    tues_txt.textContent = 'Tuesday: 473'
    tues_txt.setAttribute("font-size", 20);
    tues_txt.setAttribute('x', 10);
    tues_txt.setAttribute('y', 102);
    tues_txt.setAttribute('fill', 'white');

    svg.appendChild(tues_txt);

const wed = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    wed.setAttribute('height', 50);
    wed.setAttribute('width', 495);
    wed.setAttribute('fill', '#e1aa2a');
    wed.setAttribute('y', 140);

    svg.appendChild(wed);

const wed_txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');

    wed_txt.textContent = 'Wednesday: 495'
    wed_txt.setAttribute("font-size", 20);
    wed_txt.setAttribute('x', 10);
    wed_txt.setAttribute('y', 172);
    wed_txt.setAttribute('fill', 'white');

    svg.appendChild(wed_txt);

const thurs = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    thurs.setAttribute('height', 50);
    thurs.setAttribute('width', 633);
    thurs.setAttribute('fill', '#de8016');
    thurs.setAttribute('y', 210);

    svg.appendChild(thurs);

const thurs_txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');

    thurs_txt.textContent = 'Thursday: 633'
    thurs_txt.setAttribute("font-size", 20);
    thurs_txt.setAttribute('x', 10);
    thurs_txt.setAttribute('y', 242);
    thurs_txt.setAttribute('fill', 'white');

    svg.appendChild(thurs_txt);

const fri = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    fri.setAttribute('height', 50);
    fri.setAttribute('width', 823);
    fri.setAttribute('fill', '#c41434');
    fri.setAttribute('y', 280);

    svg.appendChild(fri);

const fri_txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');

    fri_txt.textContent = 'Friday: 823'
    fri_txt.setAttribute("font-size", 20);
    fri_txt.setAttribute('x', 10);
    fri_txt.setAttribute('y', 312);
    fri_txt.setAttribute('fill', 'white');

    svg.appendChild(fri_txt);

const sat = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    sat.setAttribute('height', 50);
    sat.setAttribute('width', 367);
    sat.setAttribute('fill', '#71f208');
    sat.setAttribute('y', 350);

    svg.appendChild(sat);

const sat_txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');

    sat_txt.textContent = 'Saturday: 367'
    sat_txt.setAttribute("font-size", 20);
    sat_txt.setAttribute('x', 10);
    sat_txt.setAttribute('y', 382);
    sat_txt.setAttribute('fill', 'white');

    svg.appendChild(sat_txt);

const sun = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    sun.setAttribute('height', 50);
    sun.setAttribute('width', 364);
    sun.setAttribute('fill', '#96f214');
    sun.setAttribute('y', 420);

    svg.appendChild(sun);


const sun_txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');

    sun_txt.textContent = 'Sunday: 420'
    sun_txt.setAttribute("font-size", 20);
    sun_txt.setAttribute('x', 10);
    sun_txt.setAttribute('y', 452);
    sun_txt.setAttribute('fill', 'white');

    svg.appendChild(sun_txt);