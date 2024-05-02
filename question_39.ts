// Sheikh Jibran Ahmed

/*City Names: Write a function called city_country() that takes in the name of a city
 and its country. The function should return a string formatted like this:
"Lahore, Pakistan" Call your function with at least three city-country pairs,
 and print the value that’s returned. */

// fuction with returning formatted string
function cities(city: string, country: string = "Pakistan"): string {
  return `${city} is the city of "${country}".`;
}

//print return value of function
console.log(cities("Jeddah", "Dubai"));
console.log(cities("Karachi"));
console.log(cities("Tokyo", "Japan"));
