/*
My code
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
const squareNums = () =>{
  return numbers.map(toSquare)
}

console.log(squareNums())
*/

const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = num => num * num

const squareNums = arr => arr.map(toSquare) 

console.log(squareNums)