function yourName () {
    const yourName = prompt("Введіть Ваше ім'я:");
    alert (`Привіт, ${yourName + '!'}`);
}

function yourAge () {
    const year = 2022;
    let age = prompt('Введіть рік народження:');
    let result = year - age;
    alert(`Вам ${result} років`);
}

function squareSide () {
    let side = parseInt(prompt('Введіть сторону квадрату:'));
    let result = side ** 2;
    alert(`Периметр квадрату становить ${result}`);
}

function circleSquare () {
    let radius = parseInt(prompt('Введіть радіус кола:'))
    let result = Math.PI * radius ** 2;
    alert(`Радіус кола ${result}`);
}

function yourSpeed () {
    let distance = parseInt(prompt('Введіть відстань в кілометрах:'));
    let hour = parseInt(prompt('Введіть години:'));
    let speed = distance / hour;
    alert (`Ваша швидкість: ${speed}`);
}

function converter () {
    const euro = 0.94;
    const dollar = parseInt(prompt('Введіть долар:'));
    const result = dollar * euro;
    alert (`€: ${result}`);
}