// Sheikh Jibran Ahmed
/* Question: 18 :Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */
//Program to sort & reverse our array
// list of world places i'd like a lot
let favorite_place = ["Macca", "London", "Egypt", "Spain"];
// list are not in alphabetical order
console.log("Original order : " + favorite_place.join("-"));
//now our list in alphabetic order without disturb original list called "deep copy"
console.log("\n Alphabetic order : " + [...favorite_place].sort().join("-"));
//see our original list aren't disturb
console.log("\n Original order again : " + favorite_place.join("-"));
//now make our list in reverse alphabetical order
console.log(" \n reverse alphabetic order : " +
    [...favorite_place].sort().reverse().join("-"));
//print our original list
console.log("\n Back to original order : " + favorite_place.join("-"));
//sort arry by sort() method
console.log("\n sorted array : " + [...favorite_place].sort().join("-"));
//Reverse array by reverse() method
console.log("\n reverse array : " + [...favorite_place].reverse().join("-"));
export {};
