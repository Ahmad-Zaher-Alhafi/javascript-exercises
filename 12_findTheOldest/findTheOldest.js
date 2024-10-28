const findTheOldest = function (arr) {
    let ages = arr.map(a => a.yearOfBirth);
    console.log(ages);
    let maxAge = Math.min(...ages);
    console.log(maxAge);
    let resArr = arr.find(person => person.yearOfBirth === maxAge);
    console.log(resArr);
    console.log(resArr.name);
    return resArr.name;
};

// Do not edit below this line
module.exports = findTheOldest;
