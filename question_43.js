// Sheikh Jibran Ahmed
/*Question: 43 :Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
with a copy of the array of magicians’ names. Because the original array will be unchanged,
return the new array and store it in a separate array. Call show_magicians() with
each array to show that you have one array of the original names and one array
with the Great added to each magician’s name. */
// store magician name in list
let magicianNames = ["Hussain", "Munaaf", "Faizan", "Mateen"];
console.log(`list before adding magician : \n${magicianNames}`);
// function for copy and add our list
function revealMagician(arr, greatMagician) {
    let magicianCopy = [...arr];
    if (greatMagician) {
        magicianCopy.push(greatMagician);
    }
    console.log(`list in function : \n${magicianCopy}`);
}
// calling a function
revealMagician(magicianNames, "Sheikh Jibran Ahmed");
console.log(`list after adding magician : \n${magicianNames}`);
export {};