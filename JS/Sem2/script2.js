// Создать новый файл lesson2.html
// Создать переменную и спросить у пользователя “Ваш возраст”
// Вывести на экран текст. Вам “возраст пользователя” лет
// Спросить у пользователя его имя
// Вывести на экран, Добро пожаловать на сайт “Имя пользователя”
// * Если пользователь ввёл отрицательное число, написать текст “ввели неверное значение”
// * Если пользователь ввёл 1, необходимо вывести текст Вам “возраст пользователя” год
// * Если возраст пользователя от 2 до 4 лет, то Вам “возраст пользователя” года

// let age = +prompt("Ваш возраст");

// if (age < 0) {
//   console.log("ввели неверное значение");
// } else if (age === 1) {
//   console.log(`возраст пользователя ${age} год`);
// } else if (age >= 2 && age <= 4) {
//   console.log(`возраст пользователя ${age} года`);
// } else {
//   console.log(`Ваш возраст ${age} лет`);
// }

// let userName = prompt("Ваше имя");
// console.log(`Добро пожаловать на сайт ${userName}`);

// // Найти остаток от деления двух переменных
// let a1 = 13;
// let b1 = 5;
// let s2 = a1 % b1;
// console.log(s2);

// // Что выведет на экран (Сначала проговорите, потом проверьте)
// let a2;
// alert(a);
// // Что выведет на экран (Сначала проговорите, потом проверьте)
// alert('abc' * 3);
// // Что выведет на экран (Сначала проговорите, потом проверьте)
// alert( 1 / 0);
// alert(-1 / 0);
// // Что выведет на экран (Сначала проговорите, потом проверьте)
// alert('2' * '3');

// Задача №3
// Сознательно допустите ошибку в вашем коде. Убедитесь, что ошибка появляется в консоли. Определите, в какой строке кода случилась ошибка.
// Необходимо вывести в консоль результат суммы данных переменных
// let a = "2";
// let b = "3";
// let sum = Number(a) + Number(b);
// console.log(sum);
// Пользователь с клавиатуры вводит 2 числа, необходимо в консоль вывести текст
// Сумма чисел равна “результат”
// Разность чисел равна “результат”
// Произведение чисел равно “результат”
// Частное чисел равно “результат”
// Остаток от деления чисел равен “результат”
// console.log(a + b);

// let firstNum = +prompt("Ведите первое число");
// let secondNum = +prompt("Ведите второе число");

// if (firstNum == "" && secondNum == "") {
//   alert("введите число");
// }
// console.log(`Сумма чисел равна ${firstNum + secondNum}`);
// console.log(`Разность чисел равна ${firstNum - secondNum}`);
// console.log(`Произведение чисел равно ${firstNum * secondNum}`);
// secondNum != 0
//   ? console.log(`Частное чисел равна ${firstNum / secondNum}`)
//   : alert("на ноль делить нельзя");
// console.log(`Остаток от деления равен ${firstNum % secondNum}`);

// // Задача №4
// Не запуская код, определите, что выведется в консоль:
// console.log(String(true));
// // Не запуская код, определите, что выведется в консоль:
// console.log("a" + true);
// // Не запуская код, определите, что выведется в консоль:
// console.log(Number(true));
// // Не запуская код, определите, что выведется в консоль:
// console.log(true + 1);
// // Не запуская код, определите, что выведется в консоль:
// console.log(true + true);
// // Не запуская код, определите, что выведется в консоль:
// console.log(true - true);
// // Не запуская код, определите, что выведется в консоль:
// console.log(String(true) + Number(true));

// Пользователь с клавиатуры вводит число, Необходимо создать условный оператор который
// Выводит в консоль “Число больше 5”
// Выводит в консоль “Число меньше 5”
// Выводит в консоль “Число равно 5”
// Даны переменные test1 и test2(вводятся с клавиатуры). Проверьте, равны ли их значения и выведите соответствующее сообщение.
// Пользовать с клавиатуры вводит 2 числа
// Необходимо найти какое из двух чисел минимальное
// Пользователь с клавиатуры вводит число, Проверьте, что данная переменная больше 0 и меньше 15.

let num = +prompt("Введите число");
if (num > 5) {
  console.log("Число больше 5");
} else if (num < 5) {
  console.log("Число меньше 5");
} else if (num == 5) {
  console.log("Число равно 5");
}

let test1 = prompt("Введите первое значение");
let test2 = prompt("Введите второе значение");

test1 == test2 ? alert("значения равны") : alert("значения не равны");

let num1 = +prompt("Введите первое число");
let num2 = +prompt("Введите второе число");

if (num1 > num2) {
  console.log("Число 1 больше Числа 2");
} else {
  console.log("Число 1  не больше Числа 2");
}

let numN = +prompt("Введите число");
alert(numN > 0 || numN < 15 ? "Число в пределах нормы" : "Число вне диапазона");
