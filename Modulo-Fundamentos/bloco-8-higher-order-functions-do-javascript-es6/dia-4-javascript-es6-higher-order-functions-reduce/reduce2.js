const numbers = [2, 3, 4, 6, 7, 12, 24];

// Somar os números pares do array com reduce

// Refatorando - Parte 1
// const evenNumber = numbers.filter( (number) => {
//   return number % 2 === 0;
// } )

// const sumEvenNumber = evenNumber.reduce( (accumulator, currentValue) => {
//   return accumulator + currentValue;
// } )

// console.log(evenNumber)

// Refatorando - Parte 2

const sumEvenNumber = numbers
  .filter( (number) => number % 2 === 0 )
  .reduce( (accumulator, currentValue) => accumulator + currentValue )

// console.log(evenNumber)

const sumEvenNumber = numbers.reduce( (accumulator, currentValue) => {
  if (currentValue % 2 !== 0) {
    return accumulator + 0;
  }  else {
    return accumulator + currentValue
  }
} , 0);

console.log(sumEvenNumber)