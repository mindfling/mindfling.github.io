// * module for booking at #tour

const tourSection = document.getElementById('tour');
const tourForm = tourSection.querySelector('.tour__form');
const tourDate = tourForm.dates; // * #tour__date
const tourPeople = tourForm.people; // * #tour__people

const URI = 'date.json';
// получаем удаленный список
const getListReservation = async (uri) => {
  const result = await fetch(uri);
  const list = await result.json();
  return list;
};

const addSelectOption = ({
  parent,
  classNameList,
  value,
  text,
  index,
}) => {
  const option = document.createElement('option');
  option.classList.add(...classNameList);
  option.value = value || '';
  option.textContent = (text || value || '');
  if (index) option.dataset.index = index || 0;
  parent.append(option);
  return parent;
};

export const tourControl = async () => {
  console.log('Hi tour');
  console.log('tourDate: ', tourDate);
  console.log('tourPeople: ', tourPeople);
  // очищаем
  tourDate.replaceChildren();
  tourPeople.replaceChildren();
  // default select
  addSelectOption({
    parent: tourDate,
    classNameList: ['tour__option', 'tour__date-text'],
    value: '',
    text: 'Выберите дату',
  });
  // default select
  addSelectOption({
    parent: tourPeople,
    classNameList: ['tour__option', 'tour__people-text'],
    value: '',
    text: 'Количество человек',
  });
  // получаем список
  const list = await getListReservation(URI);
  console.log('list ... ', ...list);


  const renderDatesList = (parent, list) => {
    // заполняем даты
    list.forEach((item, index) => {
      addSelectOption({
        parent: tourDate,
        classNameList: ['tour__option'],
        value: index + 1,
        text: item.date + ' даты',
        // index: index + 1,
      });
    });
  };

  // заполняем select количество человек min..max для тура номер list[j]
  const renderPeopleList = (parent, tour) => {
    const minPeople = tour['min-people'];
    const maxPeople = tour['max-people'];
    for (let i = minPeople; i <= maxPeople; i++) {
      addSelectOption({
        parent,
        classNameList: ['tour__option'],
        value: i,
        text: i + ' человек',
      });
    }
  };

  renderDatesList(tourDate, list);
  tourDate.addEventListener('change', (event) => {
    const target = event.target;
    const listIndex = target.value - 1;
    console.log(event.target, event.target.value);
    tourPeople.replaceChildren();
    addSelectOption({
      parent: tourPeople,
      classNameList: ['tour__option', 'tour__people-text'],
      value: '',
      text: 'Количество человек',
    });
    renderPeopleList(tourPeople, list[listIndex]);
  });

  console.log('ok');
};
