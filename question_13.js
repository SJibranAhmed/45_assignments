// Sheikh Jibran Ahmed
/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle
 or a car, and make a list that stores several examples. Use your list to print a
  series of statements about these items, such as “I would like to own a Honda motorcycle. */
//storing list for mode of transportation name i like most
let carsName = ["sportage", "sorento", "niro"];
//printing statements about our list items
for (let index = 0; index < carsName.length; index++) {
    console.log(carsName[index].charAt(0).toUpperCase() +
        carsName[index].slice(1) +
        " is model of KIA");
}
export {};
