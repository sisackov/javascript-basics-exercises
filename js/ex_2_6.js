const centuryFromYear = (year) => {
    return Math.floor(year / 100) + (year % 100 ? 1 : 0);
}

console.log(centuryFromYear(1705));//18
console.log(centuryFromYear(1900));//19
console.log(centuryFromYear(1601));//17
console.log(centuryFromYear(2000));//20