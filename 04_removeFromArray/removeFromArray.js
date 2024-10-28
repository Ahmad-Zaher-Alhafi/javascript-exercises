const removeFromArray = function (arr, ...nums) {
    return arr.filter(i => !nums.includes(i));
};

// Do not edit below this line
module.exports = removeFromArray;
