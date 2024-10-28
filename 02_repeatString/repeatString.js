const repeatString = function (someString, num) {
    if (num < 0) {
        return "ERROR";
    }

    let result = "";
    for (let index = 0; index < num; index++) {
        result += someString;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
