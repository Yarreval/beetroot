"use strict";

//.toFixed - форматує число, використовуючи запис із фіксованою комою
function additionNum() {
  var a = 0.1;
  b = 0.2;
  var result = (a + b).toFixed(1);
  alert(result);
} //parseInt('1') - Функція parseInt перетворює рядок ('1') на ціле число


function stringAndNum() {
  var stringValue = parseInt('1');
  var num = 2;
  var result = stringValue + num;
  alert(result);
} //Math.floor - округлення вниз. Округляє аргумент до найближчого меншого цілого


function flashDrive() {
  var flashDriveSize = parseInt(prompt('Введіть обсяг вашої флеш-карти в GB:'));
  var result = Math.floor(flashDriveSize * 1024 / 820);
  alert("\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0431\u0435\u0440\u0435\u0433\u0442\u0438 ".concat(result, " \u0444\u0430\u0439\u043B\u0456\u0432"));
}

function remainder() {
  var money = prompt('Наявна сума грошей:');
  var price = prompt('Ціна однієї шоколадки:');
  var option = Math.floor(money / price);
  alert("\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043A\u0443\u043F\u0438\u0442\u0438 ".concat(option, " \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A, \u0443 \u0432\u0430\u0441 \u0437\u0430\u043B\u0438\u0448\u0438\u0442\u044C\u0441\u044F ").concat(money - option * price, " \u0433\u0440\u043D."));
} //while -  оператор створює цикл, що виконує задану інструкцію, поки істинна умова, що перевіряється ???


function numReverse() {
  var rev = 0,
      num = prompt('Введіть трьохзначне число:');
  var lastNum;

  while (num != 0) {
    lastNum = num % 10;
    rev = rev * 10 + lastNum;
    num = Math.floor(num / 10);
  }

  alert(rev);
}

function bankProfit() {
  var deposit = prompt('Сума вкладу:');
  var percent = deposit / 100 * 5;
  var profit = (percent / 12 * 2).toFixed(4);
  var total = +deposit + +profit;
  alert("\u0412\u0430\u0448 \u0432\u0456\u0434\u0441\u043E\u0442\u043E\u043A - ".concat(profit + ' ' + '%', ", \u0441\u0443\u043C\u0430 - ").concat(total + ' ' + '₴'));
}