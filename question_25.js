// Sheikh Jibran Ahmed
/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called
 alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print
 a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.) */
//alein_color store in array
let alein_color = ["green", "yellow", "red"];
//put value our statements
let aleinStatus = alein_color[0];
//this is first pattern to print our value with switch statement
switch (aleinStatus) {
    case "green":
        console.log(`alein_color is ${aleinStatus}`);
        break;
    case "red":
        console.log(`alein_color is ${aleinStatus}`);
        break;
    case "yellow":
        console.log(`alein_color is ${aleinStatus}`);
        break;
}
export {};
