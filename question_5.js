// Sheikh Jibran Ahmed
/*Question: 5 :Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a
variable called famous_person. Then compose your message and store it in a new variable
called message. Print your message. */
//storing famous quote in variable
let famousQuotes = 'Stuff doesn\'t need to change the world to be good.';
//storing famous_person name 
let famous_person = 'Elon Musk';
//store both together variable  by template string
let message = `${famous_person} said,"${famousQuotes}"`;
//print our message
console.log(message);
export {};
