function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function createNumbersOfDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const listDays = document.querySelector('#days');

  for (let index2 = 0; index2 < dezDaysList.length; index2 += 1) {
    const toStringdezDaysList = dezDaysList[index2].toString();
    const createLi = document.createElement('li');
    createLi.className = 'day';
    createLi.innerText = toStringdezDaysList;
    listDays.appendChild(createLi);
  }
}

createNumbersOfDays();

// Adiciona class HOLIDAY
function addHolidayClass() {
  const number24 = document.getElementsByClassName('day')[25];
  const number25 = document.getElementsByClassName('day')[26];
  const number31 = document.getElementsByClassName('day')[32];
  number24.classList.add('holiday');
  number25.classList.add('holiday');
  number31.classList.add('holiday');
}
addHolidayClass();

// Adiciona class FRIDAY
function addHolidayFriday() {
  const number4 = document.getElementsByClassName('day')[5];
  const number11 = document.getElementsByClassName('day')[12];
  const number18 = document.getElementsByClassName('day')[19];
  const number25 = document.getElementsByClassName('day')[26];
  number4.classList.add('friday');
  number11.classList.add('friday');
  number18.classList.add('friday');
  number25.classList.add('friday');
}
addHolidayFriday();

// Criar botão feriado;
function createButton(Feriados) {
  const buttonHoliday = document.createElement('input');
  const divButton = document.getElementsByClassName('buttons-container')[0];
  buttonHoliday.setAttribute('type', 'button');
  buttonHoliday.setAttribute('name', 'Feriados');
  buttonHoliday.setAttribute('id', 'btn-holiday');
  buttonHoliday.setAttribute('value', 'Feriados');
  divButton.appendChild(buttonHoliday);
}

createButton();

// Adiciona função "mudança de background dos feriados" ao botao Feriados

const clickHoliday = document.getElementById('btn-holiday');
clickHoliday.addEventListener('click', function() {
  const holidayNumbers = document.getElementsByClassName('holiday');
  for (let index3 = 0; index3 < holidayNumbers.length; index3 += 1) {
  }
});