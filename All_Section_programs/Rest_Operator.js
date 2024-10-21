// JavaScript Rest parameter

// The JavaScript Rest parameter allows a function to accept an indefinite number of arguments as an array. It is represented by three dots (…) followed by the parameter name and must be the last parameter in the function, enabling flexible and dynamic argument handling.

// Syntax
// //... is the rest parameter (triple dots)
// function functionname(...parameters)
// {
// statement;
// }

// Note: When … is at the end of the function parameter, it is the rest parameter. It stores n number of parameters as an array. Let’s see how the rest parameter works: 


// Let’s see how the rest parameter works.

// Example 1: Without Using the Rest Parameter
// Javascript code demonstrating the passing arguments more than the parameters without using rest parameter


function fun(a, b){
        return a + b;
    }
    console.log(fun(1, 2)); // 3
    console.log(fun(1, 2, 3, 4, 5)); // 3                

// Output
// 3
// 3
// Explanation: In the above code example

// Extra arguments beyond parameters are ignored without error.
// Use … to collect additional arguments into an array.
// Rest parameters allow flexible argument handling for functions.
// Example 2: Using the Rest Parameter
// JavaScript code demonstrating the addition of numbers using the rest parameter. 





// es6 rest parameter
function fun(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}
console.log(fun(1, 2)); //3
console.log(fun(1, 2, 3)); //6
console.log(fun(1, 2, 3, 4, 5)); //15                 

// Output
// 3
// 6
// 15