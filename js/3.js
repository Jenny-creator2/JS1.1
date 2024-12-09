function solve() {

    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('result').textContent = 'Пожалуйста, введите числа.';
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