function createStateOptions(){
  let states = document.getElementById('input-state');
  let statesOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let i = 0; i < statesOptions.length; i +=1) {
    let option = document.createElement('option');
    option.innerText = statesOptions[i];
    option.value = statesOptions[i];
    states.appendChild(option);
  }
}

window.onload = function (){
  createStateOptions();
  let submitButton = document.querySelector('.submit-button');
  submitButton.addEventListener('click', handleSubmit);

  let clearButton = document.querySelector('.clear-button');
  clearButton.addEventListener('click', clearFields)
}

function handleSubmit(event){
  event.preventDefault();

  let validation = validateData();

  clearDivs();

  if(validation.erroQtd === 0){
    renderData();
  }else {
    validation.messages.unshift('Dados Inválidos')

    renderErrorMessages(validation.messages)
    }
}

function validateData(){
  let validationsList = {};

  for(let inputName in inputs){
    let isValid = validadeInput(inputName);
    validationsList[inputName] = isValid;
  }

  let counter = 0;
  let messages = [];

  for(let index in validationsList){
    if(validationsList[index] === false){
      counter += 1;
    }
  
    if(validationsList[index].message){
    counter += 1;
    messages.push(validationsList[index].message);
    }
  }

  return {
    erroQtd: counter,
    messages,
  }
}

function validadeInput(inputName){
  let inputType = inputs[inputName].type;
  let input = document.querySelector('[name=${inputName}]')
  if(inputType){
    let validationFunction = validationStrategies[inputType];
    return validationFunction(input, inputName);
  }

  return validationStrategies.default(input, inputName);
}

let validationStrategies = {
  default: defaultValidation,
  date: dateValidation,
  select: selectValidation,
  radio: radioValidation,
}