// Sheikh Jibran Ahmed
/*Question: 16 :More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner. */
// invite more friends because i've found large dinner table
//make guest in an array
let guestList = ["mateen", "munaaf", "haffi"];
//add more guest at start of the guestList by unshift() method
guestList.unshift("fahim sir");
//add more guest at middle of the guestList by splice() method
guestList.splice(2, 0, "moiz sir");
//add more guest at end of the guestList by push() method
guestList.push("nofil sir");
// print message for everyone individually
guestList.forEach((guest) => {
    console.log(`Hello! \n"${guest.toUpperCase()}" i want to dinner with you tonight are you agree?`);
});
export {};
