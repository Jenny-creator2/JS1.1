let side=document.querySelectorAll("input[type=number]");
document.querySelector("#btn").onclick=function(){
    if(+side[0].value + +side[1].value > +side[2].value && +side[1].value + +side[2].value > +side[0].value && +side[2].value + +side[0].value > +side[1].value)
    {
        document.querySelector(".msg").innerHTML="Треугольник существует";
    }
    else
    {
        document.querySelector(".msg").innerHTML="Треугольник не существует";
    }
}