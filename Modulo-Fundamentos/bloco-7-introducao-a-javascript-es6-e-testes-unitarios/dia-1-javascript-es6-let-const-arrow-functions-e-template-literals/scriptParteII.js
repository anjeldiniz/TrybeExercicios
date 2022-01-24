//Na matemática, o fatorial é o produto de todos os inteiros menores ou iguais a N! 
//Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

// const factorial = number => {
//   let result = 1;

//   for (let index = 2; index <= number; index += 1) {
//       result *= index;
//   }

//   return result;
// }

// console.log(factorial(4));

const factorial = (number) => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(4));
