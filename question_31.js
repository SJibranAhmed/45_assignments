/*Question: 31 : No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed. */
let users = ["salman", "jibran", "haseeb"];
for (let i = 0; i < users.length; i++) {
    // they become our user list is empty
    users.length = 0;
    if (users[i] === "jibran") {
        console.log(`Hello ${users[i].toUpperCase()} you know you are admin`);
    }
    else if (users[i] === "salman") {
        console.log(`Hello ${users[i].toUpperCase()} CEO of our project`);
    }
    else {
        console.log(`We need to find some users!`);
    }
}
export {};
