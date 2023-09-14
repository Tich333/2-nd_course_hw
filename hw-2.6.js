// /* №1 */
// const number = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < number.length; i++) {
//   const currentElement = number[i];

//   console.log(currentElement);

//   if (currentElement === 10) {
//     break;
//   }
// }


// /* №2 */
// const numbers = [1, 5, 4, 10, 0, 3];
// const target = 4;

// const index = numbers.indexOf(target);

// if (index !== -1) {
//   console.log(`Индекс числа ${target} в массиве: ${index}`);
// } else {
//   console.log(`Число ${target} не найдено в массиве`);
// }


// /* №3 */
// const add = [1, 3, 5, 10, 20];
// let str = add.join(' ');

// console.log(str);


// /* Задание 4 */
// const arr = [
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1]
// ];
// console.log(arr);


// const numStr = 3;
// const numColum = 3;
// const array = 1;
// const arrayBig = [];

// for (let i = 0; i < numStr; i++) {
//   const str = [];
//   for (let x = 0; x < numColum; x++) {
//     str.push(array);
//   }
//   arrayBig.push(str);
// }

// console.log(arrayBig);


// /* Задание 5 */
// const arr = [1, 1, 1];
// arr.push(2, 2, 2);

// console.log(arr);


// /* Задание 6 */
// const arr = [9, 8, 7, 'a', 6, 5];

// arr.sort();
// console.log(arr);

// const result = arr.filter(item => typeof item === 'number');
// console.log(result);


// /* Задание 7 */
// const arr = [9, 8, 7, 6, 5];

// let userNumber = +prompt('Угадай число');
// if (arr.includes(userNumber)) {
//   alert('Угадал');
// } else {
//    alert('Не угадал');
// }


// /* Задание 8 */
// const str = 'abcdef';
// const reverseStr = str.split('').reverse().join('');

// console.log(reverseStr);


// /* Задание 9 */
// const arr = [[1, 2, 3,], [4, 5, 6]];
// const unitedArr = arr[0].concat(arr[1]);
// console.log(unitedArr);


// /* Задание 10 */
// const arr = [7, 4, 5, 9, 0, 2, 6, 3, 8, 1];

// for (let i = 0; i < arr.length -1; i++) {
//   const currentNumber = arr[i];
//   const nextNumber = arr[i + 1];
//   const sum = currentNumber + nextNumber;
//   console.log(`Сумма ${currentNumber} и ${nextNumber} равна ${sum}`);
// }


// /* Задание 11 */
// function arr(number) {
//   const squareArr = number.map(function(number) {
//     return number ** 2;
// });
//    return squareArr;
// }

// const numbers = [2, 3, 1, 8, 9];
// const result = arr(numbers);
// console.log(result);


// /* Задание 12 */
// function getLengthsStrings(strings) {
//   const length = strings.map(function(arrEl) {
//     return arrEl.length;
//   })
//   return length;
// }

// const arr = ['слово', '', 'слог', 'длинное предложение', 'буква'];
// const stringLengths = getLengthsStrings(arr);
// console.log(stringLengths);


// /* Задание 13 */
// function filterPositive(array) {
//   const negativeNumbers = array.filter(function(num) {
//     return num < 0;
//   });
//   return negativeNumbers;
// }

// const result1 = filterPositive([-1, 0, 5, -10, 56]);
// console.log(result1); 

// const result2 = filterPositive([-25, 25, 0, -1000, -2]);
// console.log(result2); 
