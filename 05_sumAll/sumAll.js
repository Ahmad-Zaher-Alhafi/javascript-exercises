const sumAll = function (num1, num2) {
    if (isNaN(num1) || isNaN(num2)) return "ERROR";
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";


    let sum = num1 + num2;
    if (num1 > num2) {
        t = num2;
        num2 = num1;
        num1 = t;
    }

    for (let index = num1 + 1; index < num2; index++) {
        sum += index;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
