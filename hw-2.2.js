// задание 1
// let a = (`10`);
let a = (`Задание № 1
20`);
alert(a);
// задание 2
const iphone = (`Задание № 2
9 января 2007 года`);
alert(iphone);
// задание 3
const brendanEich = alert(`Задание № 3
Brendan Eich`);
// alert(brendanEich); Так тоже можно.только нужно удалить alert в стр. выше перед скобками
// задание 4
let b = 10;
let c = 2;
let Addition = b + c;
let Subtraction = b - c;
let Multiplication = b * c;
let Division = b / c;
alert(`Задание № 4
Сумма = ${ Addition } 
Разность = ${ Subtraction } 
Произведение = ${ Multiplication } 
Деление = ${ Division }
`);
// // /*или так*/
// let b = 10;
// let c = 2;
// let Addition = b + c;
// let Subtraction = b - c;
// let Multiplication = b * c;
// let Division = b / c;
// alert(`Задание № 4 
// Сумма = ${ Addition }`) 
// alert(`Задание № 4 
// Разность = ${ Subtraction }`) 
// alert(`Задание № 4 
// Произведение = ${ Multiplication } `)
// alert(`Задание № 4 
// Деление = ${ Division }`);
// /*-------------------------*/
// let b = 10;
// let c = 2;
// alert(`
// Сумма: ${b + c}
// Зазность: ${b - c}
// Произведение: ${b * c}
// Частное: ${b / c}
// `)
// /*--------------------------*/
// let b = 10;
// let c = 2;
// alert(`Сумма: ${b + c}`)
// alert(`Зазность: ${b - c}`)
// alert(`Произведение: ${b * c}`)
// alert(`Частное: ${b / c}`)
// задание 5
let d = 2;
let e = 5;
let result = (d ** e);
alert(`Задание № 5:
Результат: ${d} в ${e}-й степени = ${result}`);
// задание 6
let f = 9;
let g = 2;
alert(`Задание № 6:
Остаток = ${f % g}`)
// задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
// задание 8
let age = prompt(`Задание № 8:
Сколько Вам лет?`)
alert(`Задание № 8:
Вам ${age} лет`)
// задание 9
let user = {
  name: "Aleksandr",
  age: 30,
  "is Admin": "Вы администратор?"
}
console.log(user[`is Admin`]);
// задание 9.1
user.cityOfResidence = "Обнинск";
// задание 9.2
user.age = 25;
// задание 9.3
delete user.cityOfResidence;
// задание 9.4
let info = prompt(`Задание № 9
  "Какую информацию хотите узнать о пользователе?"`);
alert(`Задание № 9
${user[info]}`);
// задание 10
let userName = prompt(`Как Вас зовут?`);
alert(`Привет,${userName}!`);

