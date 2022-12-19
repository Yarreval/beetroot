//.toFixed - форматує число, використовуючи запис із фіксованою комою
function additionNum() {
    let a = 0.1
        b = 0.2;
    const result = ((a+b).toFixed(1));
    alert(result);
}

//parseInt('1') - Функція parseInt перетворює рядок ('1') на ціле число
function stringAndNum() {
    const stringValue = parseInt('1');
    const num = 2;
    const result = stringValue + num;
    alert(result);
}

//Math.floor - округлення вниз. Округляє аргумент до найближчого меншого цілого
function flashDrive() {
    const flashDriveSize = parseInt(prompt('Введіть обсяг вашої флеш-карти в GB:'));
    const result = Math.floor((flashDriveSize * 1024) / 820);
    alert(`Ви можете зберегти ${result} файлів`);
}

function remainder() {
    const money = prompt('Наявна сума грошей:')
    const price = prompt('Ціна однієї шоколадки:');
    const option = Math.floor(money / price);
    alert(`Ви можете купити ${option} шоколадок, у вас залишиться ${money - (option * price)} грн.`);
}

//while -  оператор створює цикл, що виконує задану інструкцію, поки істинна умова, що перевіряється ???
function numReverse() {
    let rev = 0,
        num = prompt('Введіть трьохзначне число:');
    let lastNum;
    while (num != 0) {
        lastNum = num % 10;
        rev = rev * 10 + lastNum;
        num = Math.floor(num / 10);
    }
    alert(rev);
}

function bankProfit() {
    const deposit = prompt('Сума вкладу:');
    const percent = (deposit / 100) * 5;
    const profit = ((percent / 12) * 2).toFixed(4);
    const total = +deposit + +profit;
    alert(`Ваш відсоток - ${profit + ' ' + '%'}, сума - ${total + ' ' + '₴'}`);
}
