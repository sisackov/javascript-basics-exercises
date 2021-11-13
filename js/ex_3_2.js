
/**
 * @param {Array.<number>} busStops array of tuples. Each tuple has 2 integers
 * the first of which represents the number of people getting on the bus 
 * the second represents the number of people getting off the bus
 * @returns  {number} number of people still on the bus after the last stop
 */
function peopleOnTheBus(busStops) {
    let people = 0;
    for (let stop of busStops) {
        people += (stop[0] - stop[1]);
    }
    return people;
}

console.log(peopleOnTheBus([[5, 0], [7, 4], [3, 5], [6, 2]]));//10