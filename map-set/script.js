const obj = {
  name: 'Evgen',
  age: 30,
  job: 'Frontend'
}

const entries = [
  ['name', 'Evgen'],
  ['age', 30],
  ['job', 'Frontend']
]

// console.log(Object.entries(obj)); // создание из объекта массива массивов (из obj получили entries)
// console.log(Object.fromEntries(entries)); // создание из объекта массива массивов (из obj получили entries)

// ------ Map -------
// * в качестве ключей могут быть любые типы данных

const map = new Map(entries); // в скобки можно поместить начальный объект
console.log(map.get('job')); // получить данные из коллекции map по ключу job

map
  .set('newField', 42) // добавил в map новую пару ключ-значение
  .set(obj, 'value of object') // ключом выступает объект
  .set(NaN, 'NotANumber')

map.delete('job');
console.log(map.has('job')); // проверка наличия ключа в коллекции, возвращает boolean
console.log(map.size); // размер всех ключей
map.clear; // очистка всей коллекции
console.log(map);

// ====================

for ()