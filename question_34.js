/*Question: 34 :Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza
 names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing
 just the name of the pizza. For each pizza you should have one line of output containing
  a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you
 like pizza. The output should consist of three or more lines about the kinds
  of pizza you like and then an additional sentence, such as I really love pizza! */
// list of my favorite pizza
let favorite_pizzas = ["tikka", "fajita", "vegetables"];
// loop for iterate our array items one by one
for (let i = 0; i < favorite_pizzas.length; i++) {
    console.log(`${favorite_pizzas[i].toUpperCase()} pizza is one of my favorite pizza please try it's teste`);
}
console.log('How much you like pizza?');
export {};
