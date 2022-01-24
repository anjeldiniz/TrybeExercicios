// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'cupuacu', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['uva', 'abacate', 'lanranja'];

const fruitSalad = (fruit, additional) => {
  const complemento = [...specialFruit, ...additionalItens];
  return complemento;
};

console.log(fruitSalad(specialFruit, additionalItens));