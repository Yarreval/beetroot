"use strict";

// let age = prompt("Your age?");
// if (age > 0 && age < 12) {
//     alert("Ти - дитина!");
// } else if (age >= 12 && age < 18) {
//     alert("Ти - підліток!");
// } else if (age >= 18 && age < 60) {
//     alert("Ти - дорослий!");
// } else if (age >= 60 && age < 105) {
//     alert("Ти - пенсіонермен!");
// } else {
//     alert("wtf???");
// }
// let number = +prompt("Your number?");
// switch (number) {
//     case '1':
//         symbol = '!';
//         break;
//     case '2':
//         symbol = '@';
//         break;
//     case '3':
//         symbol = '#';
//         break;
//     case '4':
//         symbol = '$';
//         break;
//     case '5':
//         symbol = '%';
//         break;
//     case '6':
//         symbol = '^';
//         break;
//     case '7':
//         symbol = '&';
//         break;
//     case '8':
//         symbol = '*';
//         break;
//     case '9':
//         symbol = '(';
//         break;
//     case '0':
//         symbol = ')';
//         break;
//     default:
//         symbol = 'Виберіть цифру від 1 до 0 на клавіатурі';
//         break;
// }
// function age () { 
//     const age = parseInt(document.getElementById('home_task_1').value); 
//     let result = '';
//     if (age > 0 && age < 12) {
//         result = 'Ти - дитина!';
//     } else if (age >= 12 && age < 18) {
//         result = 'Ти - підліток!';
//     } else if (age >= 18 && age < 60) {
//         result = 'Ти - дорослий!';
//     } else if (age >= 60 && age < 150) {
//         result = 'Ти - пенсіонер!';
//     } else { 
//         result = 'зеленський_мем_хто_я'
//     }
//     document.getElementById('home_task_1_result').innerText = result;
// }
function twoNumbers(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  }
}