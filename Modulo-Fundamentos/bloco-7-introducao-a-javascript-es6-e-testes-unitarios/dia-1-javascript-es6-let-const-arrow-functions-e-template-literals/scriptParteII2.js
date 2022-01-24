const longestWord = (text) => {
  let separarPalavra = text.split(' '); //metodo pronto do js que ajuda a separar as palavras e retorna novo array separado
  let maxLength = 0; //contador do cumprimento máximo das palavras
  let result = ''; //vai guardar a palavra encontrada

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length;
          result = word;
      }
  }

  return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));