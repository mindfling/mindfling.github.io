/* eslint-disable max-len */
// * module load reservation information

const URI = 'date.json';

// получаем удаленный список
const getListReservation = async (URI) => {
  const result = await fetch(URI);
  const list = await result.json();
  return list;
};

const reservation = document.getElementById('reservation');
const reservationForm = reservation.querySelector('.reservation__form');
const reserveDate = reservationForm.querySelector('#reservation__date');
const reservePeople = reservationForm.querySelector('#reservation__people');
const reservationData = reservationForm.querySelector('.reservation__data');
const reservationPrice = reservationForm.querySelector('.reservation__price');
// console.log('reservation: ', reservation);
// console.log('reservationForm: ', reservationForm);
// console.log('reserveDate: ', reserveDate);
// console.log('reservePeople: ', reservePeople);
// console.log('reservationData: ', reservationData);
// console.log('reservationPrice: ', reservationPrice);

export const reservationControl = async () => {
  console.log('Reservation');

  // clear list dates
  while (reserveDate.lastChild) {
    reserveDate.lastChild.remove();
  }
  // clear list people
  while (reservePeople.lastChild) {
    reservePeople.lastChild.remove();
  }
  // 1st select option
  const addDefaultTourOption = (parent, value = '', text = '') => {
    const option = document.createElement('option');
    option.classList.add('tour__option');
    option.value = value;
    option.textContent = text || 'Дата путешествия';
    parent.append(option);
  };
  addDefaultTourOption(reserveDate, '', 'Дата путешествия');
  // other selects
  const addTourOption = (parent, value = '', text = '') => {
    const option = document.createElement('option');
    option.classList.add('tour__option', 'reservation__option');
    option.value = value || '';
    option.textContent = text || '';
    parent.append(option);
  };

  const list = await getListReservation(URI);
  console.log('list: ', list);
  list.forEach(item => {
    // console.log(`Дата маршрута: ${item.date} ` + `от ${item['min-people']} до ${item['max-people']} человек`);
    addTourOption(reserveDate, item.date, 'даты ' + item.date);
  });

  const minPeople = list[0]['min-people'];
  const maxPeople = list[0]['max-people'];
  console.log('min max: ', minPeople, maxPeople);
  for (let i = minPeople; i <= maxPeople; i++) {
    // console.log(i);
    addTourOption(reservePeople, i, i + ' человек');
  }

  reservationData.textContent = '"' + list[0].date + '"';
  reservationPrice.textContent = list[0].price + '₽';
};
