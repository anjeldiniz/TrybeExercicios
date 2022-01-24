const players = [
  { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
  { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
  { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
  { fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br' },
];

// Reduza o array acima em um objeto conforme o exemplo abaixo

// const playerObj = {
// 	'Adriano Imperador': 'didico@futebol.br',
// 	'Ronaldinho Gaúcho': 'bruxo@futebol.br',
// 	'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
// 	'Marta Vieira da Silva': 'rainhamarta@futebol.br',
// }

// playerObj["Rods Rosa"] = "rods@futebol.br"
//playerObj = objeto
//["Rods Rosa"] = chave
//"rods@futebol.br" = valor

const newPlayers = players.reduce( (accumulator, currentValue) => {
  accumulator[currentValue.fullName] = currentValue.email;
  return accumulator;
} , {} )


console.log(newPlayers);

// accumulator: {}
// currentValue: { fullName: 'Adriano Imperador', email: 'didico@futebol.br' }