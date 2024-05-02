// Sheikh Jibran Ahmed
/*Question: 14 : Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
 Make a list that includes at least three people you’d like to invite to dinner.
  Then use your list to print a message to each person, inviting them to dinner.*/
// invite friends for invitation
//make guest in an array
let guestList = ["hasan", "munaaf", "talha"];
// print message for everyone individually
guestList.forEach((guest) => {
    console.log(`Hello! \n"${guest.toUpperCase()}" i want to dinner with you tonight are you agree?`);
});
export {};
