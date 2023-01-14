function argumentsCounter () {
    console.log(arguments.length);
}

function checkNumbers (a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else if (a === b) {
        return 0;
    }
}

function twoNumbers (number1, number2) {
    
    number1 = parseInt(+document.getElementById('twoNumbers_number_1').value);
    number2 = parseInt(+document.getElementById('twoNumbers_number_2').value);
    let rez = 0;
    rez = checkTwoNumbers (number1, number2);
    document.getElementById('twoNumbers_rez').innerText = rez;
}
