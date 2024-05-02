// Sheikh Jibran Ahmed

/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for
 the appropriate color alien. */

const alein_color: string[] = ["red", "green", "yellow"];

// For red color
let aleinStatus: string = alein_color[0];

if (aleinStatus == "green") {
  console.log(
    `You earn 5 points for shooting the alein because it's color become ${aleinStatus}.`
  );
} else if (aleinStatus == "yellow") {
  console.log(
    `You earn 10 points for shooting the alein because it's color become ${aleinStatus}.`
  );
} else if (aleinStatus == "red") {
  console.log(
    `You earn 15 points for shooting the alein because it's color become ${aleinStatus}.`
  );
} else {
  console.log(
    `You earn 10 points for shooting the alein because it's color become ${aleinStatus}. `
  );
}

// for green color
aleinStatus = alein_color[1];
if (aleinStatus == "green") {
  console.log(
    `You earn 5 points for shooting the alein because it's color become ${aleinStatus}.`
  );
} else if (aleinStatus == "yellow") {
  console.log(
    `You earn 10 points for shooting the alein because it's color become ${aleinStatus}.`
  );
} else if (aleinStatus == "red") {
  console.log(
    `You earn 15 points for shooting the alein because it's color become ${aleinStatus}.`
  );
} else {
  console.log(
    `You earn 10 points for shooting the alein because it's color become ${aleinStatus}. `
  );
}

// for yellow color
aleinStatus = alein_color[2];
if (aleinStatus == "green") {
  console.log(
    `You earn 5 points for shooting the alein because it's color become ${aleinStatus}.`
  );
} else if (aleinStatus == "yellow") {
  console.log(
    `You earn 10 points for shooting the alein because it's color become ${aleinStatus}.`
  );
} else if (aleinStatus == "red") {
  console.log(
    `You earn 15 points for shooting the alein because it's color become ${aleinStatus}.`
  );
} else {
  console.log(
    `You earn 10 points for shooting the alein because it's color become ${aleinStatus}. `
  );
}
