// Sheikh Jibran Ahmed
/*Question: 37 :Large Shirts: Modify the make_shirt() function so that shirts are large by default
 with a message that reads I love TypeScript. Make a large shirt and a medium shirt
  with the default message, and a shirt of any size with a different message */
// function with default values
function make_shirt(title = "unknown", color = "transparent", size = "general", manuNo = "00000") {
    return `The title of the shirt is "${title}" with the color of ${color} make sure size approx. '${size}'.\n The manufacture number of the product is : C${manuNo}`;
}
// store return value of function
let getShirtWithDefaultValue = make_shirt();
let getShirtWithParameter = make_shirt("the boss is coming", "reddish", "small", 89667);
//print our product
console.log("function with default values \n");
console.log(getShirtWithDefaultValue);
console.log("function with giving parameter values \n");
console.log(getShirtWithParameter);
export {};
