// Sheikh Jibran Ahmed 

/*Question: 6 :Stripping Names: Store a person’s name, and include some whitespace characters
 at the beginning and end of the name. Make sure you use each character combination,
  "\t" and "\n", at least once. Print the name once, so the whitespace around
   the name is displayed. Then print the name after striping the white spaces. */

//create variable
let personName:string = '\t Sheikh Jibran   \n    '

//print name with many whitespace
console.log("Bofore Stripping")
console.log(personName)

//stripping name 
console.log("After striping using Trim() method")
let strip_personaName:string = personName.trim()

//print name without whitespace
console.log(strip_personaName)