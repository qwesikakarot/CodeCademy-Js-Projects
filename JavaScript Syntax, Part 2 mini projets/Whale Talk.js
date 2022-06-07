let input = 'turpentine and turtles';
let vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++){
  //console.log('i is ' + i);

  for (let j = 0; j < vowels.length; j++){
    //console.log('j is ' + j)

    if (input[i] === vowels[j]){
      //console.log(input[i])
      resultArray.push(input[i].toUpperCase())
    }


  }

if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i].toUpperCase());
  }
}


const resultString = resultArray.join("");
console.log(resultString)