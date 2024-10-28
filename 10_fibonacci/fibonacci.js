const fibonacci = function (n) {
    if (n < 0) return "OOPS";

    if (typeof n === 'string') {
        n = parseInt(n);
    }

    if (n <= 1) return n;  // Base cases: F(0) = 0, F(1) = 1
    return fibonacci(n - 1) + fibonacci(n - 2);  // Recursive call
};

// Do not edit below this line
module.exports = fibonacci;
