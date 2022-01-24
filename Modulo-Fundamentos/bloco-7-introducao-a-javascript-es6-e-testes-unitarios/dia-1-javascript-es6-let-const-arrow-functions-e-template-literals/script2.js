const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const numerosArray = () => {
  oddsAndEvens [0] = 2;
  oddsAndEvens [1] = 3;
  oddsAndEvens [2] = 4;
  oddsAndEvens [3] = 7;
  oddsAndEvens [4] = 10;
  oddsAndEvens [5] = 13;

  return oddsAndEvens; //pede pra retornar a lista
}

const novaArray = numerosArray();//armazenar a chamada da funcao em uma const

console.log(`Os números ${novaArray} se encontram ordenados de forma crescente!`);


//usando a propriedade .sort
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);