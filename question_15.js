// Sheikh Jibran Ahmed
/*Question: 15 :Changing Guest List: You just heard that one of your guests can’t make the dinner,
 so you need to send out a new set of invitations. You’ll have to
think of someone else to invite. */
// invite friends decline for invitation due to some reason update our list
//make guest in an array
let guestList = ["hasan", "munaaf", "talha"];
//for update your array use below pattern
guestList.splice(1, 1, 'mateen');
guestList[2] = "haffi";
// print message for everyone individually
guestList.forEach((guest) => {
    console.log(`Hello! \n"${guest.toUpperCase()}" i want to dinner with you tonight are you agree?`);
});
export {};
