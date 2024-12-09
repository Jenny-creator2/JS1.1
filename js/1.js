let msg=prompt("Введите число");
if (isNaN(msg)){
    document.querySelector(".message").innerHTML="Это не число!"
}
else
{
    document.querySelector(".message").innerHTML="Это число!"
}
