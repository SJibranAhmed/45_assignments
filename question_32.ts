/*Question: 32 :Checking Usernames: Do the following to create a program that simulates how
 websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the
 new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used.
 If it has, print a message that the person will need to enter a new username.
  If a username has not been used, print a message saying that the username is available. */

// our current users list
let currentUsers: string[] = ["munaaf", "hammad", "azeem", "dilaver"];

//new users try to join us
let newUsers: string[] = ["suleman", "dilaver", "faizan", "munaaf"];

//checking our new user exist or not
currentUsers.forEach((users) => {
  if (newUsers.includes(users)) {
    console.log(`This user "${users.toUpperCase()}" is already exist.`);
  } else {
    console.log(`${users.toUpperCase()} you can join us`);
  }
});
