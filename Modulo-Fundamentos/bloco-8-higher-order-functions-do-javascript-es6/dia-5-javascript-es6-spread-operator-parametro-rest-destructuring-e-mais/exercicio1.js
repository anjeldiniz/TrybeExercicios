const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];



// 1 - Dado o código acima, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2 , 15 e 54 .
// Dica: use spread operator .
rectangles.forEach((rectangle) => {
  rectangleArea(...rectangle) 
  console.log(rectangle[0] * rectangle[1]);
});

// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// // Dica: use parâmetro rest .
// escreva sum abaixo
const sum = (...numbers) => numbers.reduce(((acc, val) => acc + val), 0);

