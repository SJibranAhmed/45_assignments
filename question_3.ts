// Sheikh Jibran Ahmed

/*Question: 3 : Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase*/

//create variable
let candidateName: string = "jiBrAn";

// print variable in lowercase
console.log(candidateName.toLowerCase());

// print variable in uppercase
console.log(candidateName.toUpperCase());

// print variable in titlecase
console.log(
  candidateName.charAt(0).toUpperCase() + candidateName.slice(1).toLowerCase()
);
