function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDay(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const dezDays = document.querySelector('#days');
  
  for (let i = 0; i < dezDaysList.length; i += 1){
    const dias = dezDaysList[i];
    const diasListItem = document.createElement('li');
    diasListItem.innerHTML = dias;
    diasListItem.className = "day";
    
   if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31){
   diasListItem.className = "day holiday";
   }else if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25){
  diasListItem.className = "day friday";
  }

dezDays.appendChild(diasListItem);
}    
};

createDay();

const dadButton = document.querySelector('.buttons-container');

function button(diaLindo){
  let buttonDay = document.createElement('button');
  buttonDay.innerHTML = diaLindo;
  buttonDay.setAttribute = ("id","btn-holiday"); 
  
  dadButton.appendChild(buttonDay);
}
let diaLindo = "Feriado";

button(diaLindo);

//clickP.addEventListener('click', function (event){
  //buttonDay.style.background = rgb(0,0,0) 

    //if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31){
      //style.background = rgb(100,200,100)
    //}
  
//}
//clickP(Event)
 


