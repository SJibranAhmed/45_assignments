// Sheikh Jibran Ahmed
/*Question: 26 : Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned
 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.*/
const alein_color = ["red", "green", "blue"];
// for if block
let aleinStatus = alein_color[1];
//this pattern to print our value with if/else condition
if (aleinStatus == "green") {
    console.log(`for IF block: \n You earn 5 points for shooting the alein because it's color become ${aleinStatus}. `);
}
else {
    console.log(`You earn 10 points for shooting the alein because it's color become ${aleinStatus} .`);
}
// for else block
aleinStatus = alein_color[0];
//this pattern to print our value with if/else condition
if (aleinStatus == "green") {
    console.log(`You earn 5 points for shooting the alein because it's color become ${aleinStatus}.`);
}
else {
    console.log(` for ELSE block: \n You earn 10 points for shooting the alein because it's color become ${aleinStatus}. `);
}
export {};
