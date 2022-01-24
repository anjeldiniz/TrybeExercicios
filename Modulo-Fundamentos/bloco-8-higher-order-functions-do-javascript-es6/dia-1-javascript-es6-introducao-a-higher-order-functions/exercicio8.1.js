// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
const newEmployees = (emailGeneretor) => {
  const employees = {
    id1: emailGeneretor('Pedro Guerra'), 
    id2: emailGeneretor('Luiza Drumond'), 
    id3: emailGeneretor('Carla Paiva'), 
  }
  return employees;
};

const emailGeneretor = (fullname) => {
  const name = fullname.toLowerCase().split(' ').join('_');
  return {fullname, email: `${name}@trybe.com`};
};

console.log(newEmployees(emailGeneretor));