/*Question: 33 :Ordinal Numbers: Ordinal numbers indicate their position in a array, such as
 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number.
 Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result
 should be on a separate line.*/
// print number with their ordinal suffixes give number to get their ordinal suffix
//starting number for ordinal numbers
const startNum = 1;
//ending number for ordinal numbers
let endOrdinalNumber = 10;
// for loop and if / else conditions use to print number with their ordinal suffix
for (let startNum = 1; startNum < endOrdinalNumber; startNum++) {
    if (startNum === 1) {
        console.log(startNum + "st");
    }
    else if (startNum === 2) {
        console.log(startNum + "nd");
    }
    else if (startNum === 3) {
        console.log(startNum + "rd");
    }
    else {
        console.log(startNum + "th");
    }
}
export {};
