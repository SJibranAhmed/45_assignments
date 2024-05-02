/*Question: 35 :Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the
name of each animal.
• Modify your program to print a statement about each animal,such as A dog would
 make a great pet.
• Add a line at the end of your program stating what these animals have in common.
 You could print a sentence such as Any of these animals would make a great pet! */
// list of animals with various same trait
let animals = ["cow", "dog", "goat", "sheep"];
// loop for get array's all items to print specific message
animals.forEach((anim) => {
    console.log(`${anim.charAt(0).toUpperCase() + anim.slice(1).toLowerCase()} is a domestic animal..`);
});
console.log("We want to love with animals");
export {};
