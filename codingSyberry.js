//   TODO: #1. Функция принимает массив пользователей. Исходные данные см. ниже.
//  Возвращает объект, состоящий из двух полей: women и men. Данные  поля являются массивами, в которых содержаться пользователи, подходящие по категории gender соответственно.
//  Также, вместо двух полей first_name и last_name у каждого из объектов должнобыть поле fullName в котором будут объеденины убранные поля
// (first_name и last_name). Количество пользователей может быть не ограничено.

const users = [
  {
    id: 1,
    first_name: "Jeanette",
    last_name: "Penddreth",
    email: "jpenddreth0@census.gov",
    gender: "Female",
    ip_address: "26.58.193.2",
  },
  {
    id: 2,
    first_name: "Petr",
    last_name: "Jackson",
    email: "gfrediani1@senate.gov",
    gender: "Male",
    ip_address: "229.179.4.212",
  },
];

const usersCoverter = (usersList) => {
  if (!Array.isArray(usersList)) return;

  return usersList.reduce(
    (result, user) => {
      const updatedUser = {
        id: user.id,
        fullname: `${user.first_name} ${user.last_name}`,
        email: user.email,
        id_adress: user.ip_adress,
      };

      if (user.gender === "Female") {
        result.women.push(updatedUser);
      } else {
        result.men.push(updatedUser);
      }
      return result;
    },
    { women: [], men: [] }
  );
};

console.log(usersCoverter(users));

// TODO: #2. Функция принимает массив объектов.
// Исходные данные представлены ниже.
// Возвращает массив пользователей, отсортированных по полю username в алфавитном порядке и возраст которых начинается от 21 года.
//  Количество пользователей может быть не ограничено.

const initialData = [
  { username: "Maria", age: 25 },
  { username: "Alex", age: 21 },
  { username: "Oleg", age: 14 },
  { username: "Dmitriy", age: 35 },
  { username: "Oksana", age: 72 },
];

const filterByAge = (userList) => {
  if (!Array.isArray(userList)) return;

  return userList
    .filter((user) => user.age >= 21)
    .sort((current, next) => (current.username > next.username ? 1 : -1));
};

console.log(filterByAge(initialData));

// TODO: #3.   Функция принимает массив объектов пользователей первым параметром, вторым параметром принимает массив строк (id).
// Функция должна удалить всех пользователей, чьи id будут найдены в массиве id, которые передаются нашей функции вторым параметром и вернуть массив,
// с оставшимися пользователями.

const userList = [
  {
    id: 1,
    name: "Alex",
  },
  {
    id: 2,
    name: "Tamara",
  },
  {
    id: 3,
    name: "Max",
  },
];

const removeUsersById = (userList, usersIdsToRemove) => {
  if (!Array.isArray(userList) || !Array.isArray(usersIdsToRemove)) return;

  return userList.filter((user) => {
    const isIdExists =
      usersIdsToRemove.findIndex((number) => number === user.id) !== -1;

    return !isIdExists;
  });
};

console.log(removeUsersById(userList, [1, 4]));

// TODO: #4. Функция принемает массив числовых и строчных значений, результатом функции является НОВЫЙ массив объектов.
// Каждый элемент массива    должен содержать следующие поля: elementValue - <значение элимента>, elementType - <тип элемента (number or string)>, elementIndex - <индекс элемкнта>

const initialArray = [1, "Hello", 3];

const someFunc = (arr) => {
  if (!Array.isArray(arr)) return;

  return arr.reduce((result, item, index) => {
    const newElement = {
      element: item,
      type: typeof item,
      index,
    };
    result.push(newElement);

    return result;
  }, []);
};

console.log(someFunc(initialArray));

// TODO:#5. Функция принемает строку и проверяет её на палиндром.
//  В случае если строка является палиндромом возвращает true иначе false

const isPolindrom = (string) => {
  const splitedString = string.split("");

  const reversted = splitedString.reverse();

  const joined = reversted.join("");

  return joined.toLowerCase() === string.toLowerCase();
};

console.log(isPolindrom("шалаш"));

// TODO: #6. Переделайте массив так, чтобы объекты были следующего вида { id: …, title: … }.
// Использовать функцию map

const newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

const newArray = newReleases.map((release) => ({
  id: release.id,
  title: release.title,
}));

console.log(newArray);

// TODO: #7. Выведите массив ids для видео у которых рейтинг 5.0.
// В качестве входных данных используйте newReleases из предыдущего задания.

const newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

const getTopRatedFilms = (filmlist) => {
  if (!Array.isArray(filmlist)) return;

  return filmlist.reduce((result, release) => {
    if (release.rating[0] === 5.0) {
      result.push(release.id);
    }
    return result;
  }, []);
};

console.log(getTopRatedFilms(newReleases));

//   TODO: #8. Преобразуйте массив в объект используя функцию reduce.

const videos = [
  { id: 65432445, title: "The Chamber" },
  { id: 675465, title: "Fracture" },
  { id: 70111470, title: "Die Hard" },
  { id: 654356453, title: "Bad Boys" },
];

const videosIdTitleMap = videos.reduce((result, video) => {
  result[video.id] = video.title;

  return result;
}, {});

console.log(videosIdTitleMap);

// TODO #9: С помощью функций map, reduce, вывести url у которого самая большая площадь

const boxarts = [
  {
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
  },
  {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
  },
  {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
  },
  {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg",
  },
];

const preparedBoxAcrts = boxarts.map(({ width, height, url }) => ({
  calcularedArea: width * height,
  url,
}));

const theBigestAreaURL = preparedBoxAcrts.reduce((result, boxart) => {
  return result.calculatedArea > boxart.calculatedArea ? result : boxart;
}).url;

console.log(theBigestAreaURL);

// Написать свою реализацию метода filter

const numberArray = [1, 2, 3, 4, 5, 6, 7];
Array.prototype.customFilter = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const executedArray = numberArray.customFilter((elem, index, array) => {
  return elem > 3;
});

console.log(executedArray);

// Написать свою реализацию метода map

const largeNumbersArray = [29, 56, 101, 177, 48, 196, 517];
Array.prototype.customMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result[i] = callback(this[i], i, this);
  }
  return result;
};

const arr2 = largeNumbersArray.customMap((elem, index, array) => {
  return elem * 2;
});

console.log(arr2);
