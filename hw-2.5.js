// //Задание 1
// function getNambers(a, b) {

//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(getNambers(3, 5));
// console.log(getNambers(2, 2));
// console.log(getNambers(8, 4));


// const getNambers = (a, b) => {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(getNambers(3, 5));
// console.log(getNambers(2, 2));
// console.log(getNambers(8, 4));


// // Задание 2
// // const getMultiplicity = () => {

// //   let userNamber = Number(prompt('Ведите любое число'));
// //   if (userNamber % 2 === 0) {
// //     // console.log(`Число четное`)
// //     return "Число четное";
// //   } else {
// //     // console.log(`Число не четное`)
// //     return "Число не четное";
// //   }
// // }

// // console.log(getMultiplicity())
// // getMultiplicity()


// /*-------------------------*/
// const getMultiplicity = () => {
  //   let userNamber = Number(prompt('Ведите любое число'));

  //   if (userNamber % 2 === 0) {
  //     console.log(`Число четное`);
  //     alert(`Число четное`);
  //   } else {
  //     console.log(`Число не четное`);
  //     alert(`Число не четное`);
  //   }
  // }


// getMultiplicity()

// // Задание 3
// // const visionToDegree = () => {

// //   let userNumber = Number(prompt('Ведите число'));
// //   let result = userNumber ** 2;
// //   console.log(`${ result }`);
// //   alert(`${result}`);
// // }

// // visionToDegree();


// function getVisionToDegree() {

//   let userNumber = Number(prompt('Ведите число'));
//   return userNumber ** 2;
// }

// let result = getVisionToDegree();
// console.log(`${result}`);
// alert(`${result}`);


// // Задание 4
// const year = () => {
//   let userYear = Number(prompt("Сколько вам лет?"));

//   if (userYear < 0) {
//     alert(`Вы ввели неправильное значение`);
//   } else if (userYear > 0 && userYear <= 12) {
//   alert(`Привет, друг!`);
//   } else {
//   alert(`Добро пожаловать!`);
//   }
// }

// year();


// // Задание 5
// const getProductOfNumbers = () => {
//   let number1 = Number(prompt('Ведите первое число'));
//   let number2 = Number(prompt('Ведите второе число'));

//   if (isNaN(number1) || isNaN(number2)) {  //это стр. проверка на "число"
//     alert(`Одно или оба значения не являются числом`)
//     return 'Одно или оба значения не являются числом';
//   } else {
//     let result = number1 * number2;
//     alert(`${result} Ты Молодец! Справился`)
//     return (`${result} Ты Молодец! Справился`)
//   }
// };

// console.log(getProductOfNumbers());
// // let enter = getProductOfNumbers();
// // console.log(enter);
// // console.log(getProductOfNumbers(5, 3));
// // console.log(getProductOfNumbers('abc', 3));
// // console.log(getProductOfNumbers(2, 'def'));
// // console.log(getProductOfNumbers('abc', 'def'));


// // Задание 6
// const getNumber = () => {
//   let userNumber = +(prompt("Вудите любое число"));

//   if (isNaN(userNumber)) {
//     alert ("Переданный параметр не является числом");
//     return "Переданный параметр не является числом";
//   } else {
//     let cube = (userNumber ** 3);
//     alert (`${userNumber} в кубе равняется ${cube}`);
//     return (`${userNumber} в кубе равняется ${cube}`);
//   }
// }

// let enter = getNumber();
// console.log(enter);


// // Задание 7
// function getCircleArea() {
//   return Math.PI * this.radius ** 2;
// }
// function getCirclePerimeter() {
//   return 2 * Math.PI * this.getArea();
// }

// const circle1 = {
//   radius: 8,
//   getArea: getCircleArea,
//   getPerimeter: getCirclePerimeter,
// }

// const circle2 = {
//   radius: 8,
//   getArea: getCircleArea,
//   getPerimeter: getCirclePerimeter,
// }

// let Area = circle1.getArea()
// let Perimeter = circle1.getPerimeter()
// console.log(`Радиус окружности равен ${Area}`);
// console.log(`Периметр окружности равен ${Perimeter}`);/* Можно так и так */
// console.log(circle2.getArea());/* Можно так и так */
// console.log(circle1.getPerimeter());


// Задание 8
function month() {
  
let monthNumber = +prompt("Введите число месяца и узнаете, к какому времени года оно относится");

if (!isNaN(monthNumber)) { /*Проверка на числа*/
  if (monthNumber >= 1 && monthNumber <= 2 || monthNumber === 12) {
    alert('Зима');
    console.log(`Зима`);
  } else if (monthNumber >= 3 && monthNumber <= 5) {
    alert('Весна');
    console.log(`Весна`);
  } else if (monthNumber >= 6 && monthNumber <= 8) {
    alert('Лето');
    console.log(`Лето`);
  } else if (monthNumber >= 9 && monthNumber <= 11) {
    alert('Осень');
    console.log(`Осень`);
  } else if (monthNumber === 0 || monthNumber > 12) {
    alert('Ой! Введено некорректное число месяца!');
    console.log('Ой! Введено некорректное число месяца!');
  } 
} else {
  alert('Ой!  Введено текстовое значение или неправильный формат числа!');
  console.log('Ой!  Введено текстовое значение или неправильный формат числа!');
}
}