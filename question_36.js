// Sheikh Jibran Ahmed
/*Question: 36 :T-Shirt: Write a function called make_shirt() that accepts a size and the text
 of a message that should be printed on the shirt. The function should print a sentence
  summarizing the size of the shirt and the message printed on it. Call the function. */
// function for get shirt features
function T_shirt(size, message) {
    return `Size of T-Shirt : ${size},
Message which is print at the front of the shirt : "${message}" \n`;
}
// calling functions with their parameter
let shirt1 = T_shirt("large", "Gabber is back");
let shirt2 = T_shirt("Xlarge", "John bannay ga don");
let shirt3 = T_shirt("medium", "Two and two make four");
// printing function return values
console.log(shirt1);
console.log(shirt2);
console.log(shirt3);
export {};
