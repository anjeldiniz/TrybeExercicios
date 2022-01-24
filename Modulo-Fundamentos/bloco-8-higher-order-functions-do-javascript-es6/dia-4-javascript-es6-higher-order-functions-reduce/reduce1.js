const numbers = [2, 3, 4, 6, 7, 12, 24];

// Somar os números do array com reduce
// const sumWithReduce = numbers.reduce( (accumulator, currentValue) => {
//   console.log(`acc: ${accumulator} ----> currValue: ${currentValue}`);
//   return accumulator + currentValue;
// } );

// Refatorando
const sumWithReduce = numbers.reduce( (accumulator, currentValue) => accumulator + currentValue );

console.log(sumWithReduce)

// For
// let accumulator = numbers[0]; // 2

// for (let index = 1; index < numbers.length; index += 1) {
//   accumulator = accumulator + numbers[index];
// }

// console.log(accumulator);