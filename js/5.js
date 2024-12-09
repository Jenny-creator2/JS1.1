let a=+prompt("Введите число");
let b=+prompt("Введите число");
let c=+prompt("Введите число");
let d=+prompt("Введите число");
if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d))
{
    document.querySelector(".msg").innerHTML="Неверный ввод";  
}
else{
    let select=prompt("Выберите каким способом решать? 1 или 2");
    let max=a+b;
    switch(select)
    {
        case "1":
            if (max<c+d) max=c+d;
            if (max<a+c) max=a+c;
            if (max<b+c) max=b+c;
            if (max<a+d) max=a+d;
            if (max<b+d) max=b+d;

            break;
        case "2":
            max=Math.max(a+b,a+c,a+d,b+c,b+d,c+d)
            break;
        default:
            max="Неверный выбор"; 

    }
    document.querySelector(".msg").innerHTML=max;  
}