let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + 'se chama ' + leitor.livrosFavoritos.titulo);

let cars = ['fusca', 'gol', 'bmw']

for (let i in cars){
  console.log(i);
}