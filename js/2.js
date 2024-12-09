function checkNumber() {
    let number = prompt("Введите число:");


    number = Number(number);

    if (number < 0) {
        console.log(`Введенное число ${number} отрицательное`);
    } else if (number > 0) {
        console.log(`Введенное число ${number} положительное`);
    } else {
        console.log(`Введенное число ${number} равно нулю`);
    }
}
