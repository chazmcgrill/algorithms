/* Maps through elements creating new object 
  with orbital period worked out by the time 
  function */

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const EARTH_RADIUS = 6367.4447;

    /* Calculate time with formula (T = sqrt(4 x pi^2 x radius^3 / GM)) */
    function time(alt) {
        const RADIUS = alt + EARTH_RADIUS;
        const SUM = (4 * Math.pow(Math.PI, 2) * Math.pow(RADIUS, 3)) / GM;
        return Math.round(Math.pow(SUM, 0.5));
    }

    return arr.map((el) => ({ name: el.name, orbitalPeriod: time(el.avgAlt) }));
}

console.log(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]));
console.log(
    orbitalPeriod([
        { name: 'iss', avgAlt: 413.6 },
        { name: 'hubble', avgAlt: 556.7 },
        { name: 'moon', avgAlt: 378632.553 },
    ]),
);
