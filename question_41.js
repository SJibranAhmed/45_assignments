// Sheikh Jibran Ahmed
/*Question: 41 :Magicians: Make a array of magician’s names. Pass the array to a function called
 show_magicians(), which prints the name of each magician in the array. */
// store magician name in list
let magicianNames = [
    "Celestia Spellweaver",
    "Arcane Aurora",
    "Wizard Waverly",
    "Mystic Marlowe",
];
// function for reveal magician name one by one
function revealMagician(arr) {
    arr.forEach((magician) => {
        console.log(magician);
    });
}
// calling a function
console.log('Showing magicians name');
revealMagician(magicianNames);
export {};
