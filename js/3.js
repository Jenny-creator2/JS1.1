function solve() {

    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('result').textContent = 'Пожалуйста, введите числа.';
        return;
    }


  if (a === 0) {
    if (b === 0) {
        if (c === 0) {
            document.getElementById('result').textContent = 'У уравнения бесконечно много решений.';
        } else {
            document.getElementById('result').textContent = 'У уравнения нет решений.';
        }
    } else {
        let x = -c / b;
        document.getElementById('result').textContent = 'У уравнения одно решение';
    }
    return;
}



    let discriminant = b * b - 4 * a * c;

 
    let resultMessage = '';
    if (discriminant > 0) {
        resultMessage = 'У уравнения два различных решения';
    } else if (discriminant === 0) {
        resultMessage = 'У уравнения одно решение';
    } else {
        resultMessage = 'У уравнения нет решений';
    }

    document.getElementById('result').textContent = resultMessage;
}