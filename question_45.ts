// Sheikh Jibran Ahmed

/*Question: 45 :Cars: Write a function that stores information about a car in a Object. The function
should always receive a manufacturer and a model name. It should then accept an arbitrary
number of keyword arguments. Call the function with the required information and two
other name-value pairs, such as a color or an optional feature. Print the Object that’s
returned to make sure all the information was stored correctly. */

// function for car details
function carsDetail(
    name: string,
    architect: string,
    ...options: string[]
  ): object {
    let features: { [key: string]: any } = {
      name,
      architect,
    };
  
    for (let i = 0; i < options.length; i += 2) {
      const key = options[i];
      const value = options[i + 1];
      features[key] = value;
    }
  
    return features;
  }
  
  // calling and printing function with parameters
  console.log(carsDetail("sportage", "KIA", "color", "silver", "model", "2021"));
  console.log(carsDetail("corolla", "Toyota", "color", "white", "model", "2018"));
  
