/**
 * 
 * @param {positive integer} p0 initial population
 * @param {positive or null number} percent increase every year
 * @param {integer} aug inhabitants coming or leaving each year
 * @param {positive integer} p population to surpass
 * @return n number of entire years needed to get a population greater or equal to p
 */
function nb_year(p0, percent, aug, p) {
    if (p0 >= p) {
        return 0;
    }

    percent /= 100;
    let pop = p0;
    let n = 0;
    while (pop < p) {
        pop = pop + pop * percent + aug;
        n++;
    }
    return n;
}

console.log(nb_year(1500, 5, 100, 5000));//15
console.log(nb_year(1500000, 2.5, 10000, 2000000));//10
