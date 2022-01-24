const wakeUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const rest = () => 'Partiu dormir!!';

// Agora desenvolva uma _HOF_ chamada `doingThings` e configure esta função
// para que imprima no console o resultado da execução das funções que você
// criou nos exemplos anteriores.

const doingThings = (callback) => {
  const result = callback();
  console.log(result)
};

doingThings(wakeUp);
doingThings(breakfast);
doingThings(rest);
