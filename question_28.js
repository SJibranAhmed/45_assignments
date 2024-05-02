// Sheikh Jibran Ahmed
/*Question: 28 :Stages of Life: Write an if-else chain that determines a person’s stage of life.
 Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.*/
//prompt for get person year of birth
import inquirer from "inquirer";
let person_age = await inquirer.prompt({
    type: "number",
    name: "age",
    message: "Enter your year of birth to find your age",
});
//calculation for user age
let age = 2024 - parseInt(person_age.age);
// if else statements for human stages
if (age >= 1 && age <= 3) {
    console.log(`You\'re infant because your age is ${age} years old`);
}
else if (age >= 4 && age <= 17) {
    console.log(`You\'re child because your age is ${age} years old`);
}
else if (age >= 18 && age <= 40) {
    console.log(`You\'re adult because your age is ${age} years old`);
}
else if (age >= 41) {
    console.log(`You\'re elder because your age is ${age} years old`);
}
else {
    console.log("Please enter your valid year-of-birth");
}
