// Sheikh Jibran Ahmed
/*Question: 44 :Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call
provides, and it should print a summary of the sandwich that is being ordered. Call the
function three times, using a different number of arguments each time. */
// function for prepare a sandwich
// for multiple parameters we use "..." rest parameter
function readySandwich(...items) {
    return console.log(`Making a sandwich with : ${items.join(", ")}.`);
}
// calling function with ingredients items or arguments
readySandwich("breads", "eggs", "tomato", "onions", "cucumber", "cheese");
export {};
