// Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17" (только здесь данные, которые были переданы в функцию)

// let userName = prompt("Введите ваше имя");
// let userFamilyname = prompt("Введите вашу фамилию");
// let userAge = +prompt("Введите ваш возраст");

// function studentInfo(name, familyname, age) {
//   console.log(`Привет ${name} ${familyname} с возрастом ${age}`);
//   //   return "Привет ${name} ${familyname} с возрастом ${age}";
// }
// studentInfo(userName, userFamilyname, userAge);

// Создайте функцию которая возводит переданное число в квадрат

// const degree = (x) => x ** 2;
// let x = +prompt("Введите число");
// alert(degree(x));

// Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.

// let mark = +prompt("Введите число");

// function num(a) {
//   if (a > 0) {
//     console.log("+++");
//   } else {
//     console.log("---");
//   }
// }
// num(mark);

// Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.

// function sum(param1, param2, param3) {
//   param1 = Number(param1);
//   return param1 + param2 + param3;
// }
// console.log(sum(3, 2, 5));
// console.log(sum(param1, param2, param3));

// С помощью созданной вами функции выведите в консоль сумму значений этих переменных.
// let param1 = "1";
// let param2 = 2;
// let param3 = 3;

// function sum(param1, param2, param3) {

//   return Number(param1) + Number(param2) + Number(param3);
// }
// console.log(sum(3, 2, 5));
// console.log(sum(param1, param2, param3));

// Дана функция
// function func(num = 5) {
//   console.log(num * num);
// }
// func(2);
// func(3);
// func();

/* Задача № 3.1*/

/*Вариант№1*/
// const summSqrts = (num1, num2) =>
//   console.log(Math.sqrt(num1) + Math.sqrt(num2));
// summSqrts(3, 4);

/*Вариант№2*/

// function summSqrts2(num11, num22) {
//   sqrt1 = Math.sqrt(num11);
//   sqrt2 = Math.sqrt(num22);
//   const summ = (sqrt1, sqrt2) => console.log(sqrt1 + sqrt2);
//   summ(sqrt1, sqrt2);
// }
// summSqrts2(3, 4);

/* Задача № 3.2*/

// function minNum(num1, num2) {
//   if (num1 < num2) {
//     console.log(`Минимальное число равно ${num1}`);
//   } else {
//     console.log(`Минимальное число равно ${num2}`);
//   }
// }
// minNum(77, 8);

/*Задача №4.1*/

// Создайте функцию, которая принимает число от 1 - 7, а возвращает день недели на русском языке

// let dayNumber = +prompt(`Введите число от 1 до 7, "1 - 7"`);

// const dayName = (dayNumber) => {
//   switch (dayNumber) {
//     case 1:
//       console.log("понедельник");
//       break;
//     case 2:
//       console.log("вторник");
//       break;
//     case 3:
//       console.log("среда");
//       break;
//     case 4:
//       console.log("четверг");
//       break;
//     case 5:
//       console.log("пятница");
//       break;
//     case 6:
//       console.log("суббота");
//       break;
//     case 7:
//       console.log("воскресенье");
//       break;
//     default:
//       console.log("такого дня не бывает");
//       break;
//   }
// };
// dayName(dayNumber);

/*вариант 2*/
// function dayName(dayNumber) {
//   switch (dayNumber) {
//     case 1:
//       console.log("понедельник");
//       break;
//     case 2:
//       console.log("вторник");
//       break;
//     case 3:
//       console.log("среда");
//       break;
//     case 4:
//       console.log("четверг");
//       break;
//     case 5:
//       console.log("пятница");
//       break;
//     case 6:
//       console.log("суббота");
//       break;
//     case 7:
//       console.log("воскресенье");
//       break;
//     default:
//       console.log("такого дня не бывает");
//       break;
//   }
// }
// dayName(dayNumber);

// Написать функцию, которой передаем имя и время. она возвращает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван) (гуглить время js)

/*Задача №4.1*/

// let userName = prompt("Введите ваше имя");
// let time = tim(+prompt("Введите время"));

// const greeting = (userName, time) => {
//   let hours = time.getHours();

//   if (hours >= 6 && hours <= 12) {
//     console.log(`Доброе утро, ${userName}`);
//   } else if (hours > 12 && hours <= 17) {
//     console.log(`Добрый день, ${userName}`);
//   } else if (hours > 17 && hours <= 24) {
//     console.log(`Добрый вечер, ${userName}`);
//   } else if (hours > 0 && hours < 6) {
//     console.log(`Доброй ночи, ${userName}`);
//   } else {
//     console.log("некорректный параметр");
//   }
// };
// greeting("Ivan", new Date());

/*Задача №5*/
// Написать функцию, в которую передаем 2 аргумента, первое это вопрос на любую загадку, второе это ответ на данную загадку, необходимо сравнить ответ пользователя на загадку и вернуть, true или false значение
// * Добавить подсказку, если пользователь ответил неверно

const puzzle = (question, answer) => {
  let userAnswer = prompt(question);

  //   userAnswer.toLowerCase() == answer ? return true : return false;
  if (userAnswer.toLowerCase() == answer) {
    alert(true);
  } else {
    alert(false);
    alert("Ответ неверен");
  }
};
puzzle("Зимой и летом - одним цветом", "ёлка");
