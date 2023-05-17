// Sqrt(x) - easy

// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

var mySqrt = function(x) {
    return Math.floor(Math.sqrt(x))
};

console.log(mySqrt(8))