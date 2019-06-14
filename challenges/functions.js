// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function aHigherOrderFunction(param1, param2, cb) {
    return cb = Math.sqrt(param1 * param2);
}

console.log(aHigherOrderFunction(10, 15));

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(num1, num2, cb) {
    return cb = (num1 + num2);
}

function multiply(num1, num2, cb) {
    return cb = (num1 * num2);
}

function greeting(firstName, lastName, cb) {
    return `Hello ${firstName} ${lastName}, nice to meet you!`
}

function consume(param1, param2, cb) {
}
/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2, 2, add); // 4
consume(10, 16, multiply); // 160
consume("Mary", "Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

/*
 The nestedfunction() can access 'internal' because it is inside the external block;
 This gives it access to all of the external elements, variables... think block scope.
 Because the external is not inside internal's block, it cannot access internal's elements, variables, etc.
 */

const external = "I'm outside the function";

function myFunction() {
    console.log(external);
    const internal = "Hello! I'm inside myFunction!";

    function nestedFunction() {
        console.log(internal);
    };
    nestedFunction();
}

myFunction();