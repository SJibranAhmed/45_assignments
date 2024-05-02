//Sheikh Jibran Ahmed
/*Question: 17 :Shrinking Guest List: You just found out that your new dinner table won’t
arrive in time for the dinner, and you have space for only two guests. */
//Program for shrinking guest list
//scenerio cancel i whether to reduce my guest list
//make guest in an array
let guestList = [
    "mateen",
    "munaaf",
    "fahim sir",
    "moiz sir",
    "haffi",
];
//remove guest from start by using shift() method
guestList.shift();
//remove guest from middle by using shift() method
guestList.splice(0, 1);
//remove guest from end by using pop() method
guestList.pop();
// print message
guestList.forEach((guest) => {
    console.log(`You \n"${guest.toUpperCase()}" come and dinner with me now.`);
});
export {};
