// Sheikh Jibran Ahmed

/*Hello Admin: Make a array of five or more usernames, including the name 'admin'.
 Imagine you are writing code that will print a greeting to each user after they log
  in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin,
 would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again. */

let users: string[] = ["salman", "jibran", "haseeb"];

//for loop for printing greeting for all users
for (let i = 0; i < users.length; i++) {
  if (users[i] === "jibran") {
    console.log(`Hello ${users[i].toUpperCase()} you know you are admin`);
  } else if (users[i] === "salman") {
    console.log(`Hello ${users[i].toUpperCase()} CEO of our project`);
  } else {
    console.log(`Hello ${users[i].toUpperCase()} how are you??`);
  }
}
