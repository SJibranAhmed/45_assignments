// Sheikh Jibran Ahmed

/*Question: 23 :Conditional Tests: Write a series of conditional tests. Print a statement describing
 each test and your prediction for the results of each test. Your code should look something
  like this: */

import inquirer from "inquirer";

//user expression get
let userGetValue = await inquirer.prompt({
  type: "confirm",
  name: "expression",
  message: "Restriction 18+",
});

//user expression yes or no
let expression = userGetValue.expression;

//condition for user expression
let result =
  expression == true ? "Welcome to our MetaVerse " : "Sorry you're not allow";

//print result
console.log(result);
