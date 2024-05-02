//Sheikh Jibran Ahmed
/*Question: 29 :Favorite Fruit: Make a array of your favorite fruits, and then write a series
 of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit
 is in your array. If the fruit is in your array, the if block should print
 a statement, such as You really like bananas! */
//list of favorite fruits
let favorite_fruit = ["apple", "mango", "grapes"];
//check items
let fruit = "peach";
//  if / else condition for check our fruit list
if (favorite_fruit.includes(fruit.toLowerCase())) {
    console.log(`${fruit} is your favorite fruit.`);
}
else {
    console.log(`Sorry! ${fruit} isn't your favorite fruit.`);
}
export {};
