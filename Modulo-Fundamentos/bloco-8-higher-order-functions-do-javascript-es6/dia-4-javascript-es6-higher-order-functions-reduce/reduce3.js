const epic = ['A', 'long', 'time', 'ago,', 'in a', 'galaxy', 'far far', 'away...'];

const epicPhrase = epic.reduce( (accumulator, currentValue) => {
  console.log(`acc: ${accumulator} ----> currValue: ${currentValue}`);
  return `${accumulator} ${currentValue}`
} , "Star Wars Phrase:")

console.log(epicPhrase)