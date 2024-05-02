// Sheikh Jibran Ahmed
/*Question: 38 :Cities: Write a function called describe_city() that accepts the name of a city
 and its country. The function should print a simple sentence, such as Karachi is in Pakistan.
 Give the parameter for the country a default value. Call your function for three different
  cities, at least one of which is not in the default country. */
// fuction with default value
function describeCity(city, country = "Pakistan") {
    console.log(`${city} is the city of "${country}".`);
}
//calling functions with arguments
describeCity("Islamabad");
describeCity("Jeddah", "Dubai");
describeCity("Karachi");
export {};
