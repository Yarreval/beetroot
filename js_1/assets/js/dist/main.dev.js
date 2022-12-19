"use strict";

function yourName() {
  var yourName = prompt("Введіть Ваше ім'я:");
  alert("\u041F\u0440\u0438\u0432\u0456\u0442, ".concat(yourName + '!'));
}

function yourAge() {
  var year = 2022;
  var age = prompt('Введіть рік народження:');
  var result = year - age;
  alert("\u0412\u0430\u043C ".concat(result, " \u0440\u043E\u043A\u0456\u0432"));
}

function squareSide() {
  var side = parseInt(prompt('Введіть сторону квадрату:'));
  var result = Math.pow(side, 2);
  alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0443 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C ".concat(result));
}

function circleSquare() {
  var radius = parseInt(prompt('Введіть радіус кола:'));
  var result = Math.PI * Math.pow(radius, 2);
  alert("\u0420\u0430\u0434\u0456\u0443\u0441 \u043A\u043E\u043B\u0430 ".concat(result));
}

function yourSpeed() {
  var distance = parseInt(prompt('Введіть відстань в кілометрах:'));
  var hour = parseInt(prompt('Введіть години:'));
  var speed = distance / hour;
  alert("\u0412\u0430\u0448\u0430 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C: ".concat(speed));
}

function converter() {
  var euro = 0.94;
  var dollar = parseInt(prompt('Введіть долар:'));
  var result = dollar * euro;
  alert("\u20AC: ".concat(result));
}