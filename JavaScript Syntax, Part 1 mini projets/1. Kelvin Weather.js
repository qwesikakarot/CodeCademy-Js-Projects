//Value of Kelvin
const kelvin = 0;

//kelvin to celsius
let celsius = kelvin - 273;
//console.log(celsius)

//converting celsius to fahrenheit
let fahrenheit =  celsius * (9/5) + 32;
//console.log(fahrenheit)

//rounding up value of fahrenheit 
fahrenheit = Math.floor(fahrenheit );
//console.log(fahrenheit)

//printing out the value of fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)


//Celsius to Newton
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`)