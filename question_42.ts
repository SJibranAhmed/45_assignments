// Sheikh Jibran Ahmed

/*Question: 42 :Great Magicians: Start with a copy of your program from Exercise 39. Write a function
called make_great() that modifies the array of magicians by adding the phrase the Great
to each magician’s name. Call show_magicians() to see that the list has actually
been modified */

// store magician name in list
let magicianNames: string[] = [
  "Celestia Spellweaver",
  "Arcane Aurora",
  "Wizard Waverly",
  "Mystic Marlowe",
];
// function for reveal magician name one by one
function revealMagician(arr: string[], greatMagician?:string): void {
  if (greatMagician) {
    arr.push(greatMagician);
  }
  arr.forEach((magician) => {
    console.log(magician + ' is a great magician');
  });
}

// calling a function
revealMagician(magicianNames, "Sheikh Jibran Ahmed");
// revealMagician(magicianNames)
