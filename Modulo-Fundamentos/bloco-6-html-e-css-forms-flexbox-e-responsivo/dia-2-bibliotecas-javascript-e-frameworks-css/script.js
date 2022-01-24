const estados = [
  { value: 'AC', label: 'Acre' },
  { value: 'AL', label: 'Alagoas' },
  { value: 'AP', label: 'Amapá' },
  { value: 'AM', label: 'Amazonas' },
  { value: 'BA', label: 'Bahia' },
  { value: 'CE', label: 'Ceará' },
  { value: 'DF', label: 'Distrito Federal' },
  { value: 'ES', label: 'Espírito Santo' },
  { value: 'GO', label: 'Goías' },
  { value: 'MA', label: 'Maranhão' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'MS', label: 'Mato Grosso do Sul' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'PA', label: 'Pará' },
  { value: 'PB', label: 'Paraíba' },
  { value: 'PR', label: 'Paraná' },
  { value: 'PE', label: 'Pernambuco' },
  { value: 'PI', label: 'Piauí' },
  { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'RN', label: 'Rio Grande do Norte' },
  { value: 'RS', label: 'Rio Grande do Sul' },
  { value: 'RO', label: 'Rondônia' },
  { value: 'RR', label: 'Roraíma' },
  { value: 'SC', label: 'Santa Catarina' },
  { value: 'SP', label: 'São Paulo' },
  { value: 'SE', label: 'Sergipe' },
  { value: 'TO', label: 'Tocantins' },
];

const selectEstado = document.querySelector("#select-estado");

for (let i = 0; i < estados.length; i += 1){
  const opition = document.createElement('option');
  opition.value = estados[i].value;
  opition.innerText = estados[i].label;

  selectEstado.appendChild(opition);
}

const validate = new window.JustValidate('#form');

validate
  .addField('#input-name', [
    {
      rule: 'required',
      errorMessage: 'Esse campo é obrigatório.',
    },
    {
      rule: 'minLength', 
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])

  .addField('#input-email', [
    {
      rule: 'required',
      errorMessage: 'Esse campo é obrigatório.',
    },
    {
      rule: 'email', 
      errorMessage: 'E-mail inválido!'
    },
  ])

  .addField('#input-fone', [
    {
      rule: 'required',
      errorMessage: 'Esse campo é obrigatório.',
    },
    {
      rule: 'minLength', 
      value: 9,
    },
    {
      rule: 'maxLength',
      value: 9,
    },
  ])

  const datePickerObj = {
    mondayFirst: false,
    format: 'D dd/mm/yyyy',
    minDate: '01/01/2022',
    weekDayLabels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
  }




