// Makkelijke berekeningen
    // Plus, min, delen, vermenigvuldigen
    function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = "Het antwoord is : "+num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = "Het antwoord is : "+num1 / num2;
}
function plus() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        num3 = +num1 + +num2;
        document.getElementById("result").innerHTML = "Het antwoord is : "+num3;
}
function min() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1-num2;
}

// Machten
function berekenMacht() {
    var num1 = document.getElementById("macht").value;
    var num2 = document.getElementById("macht2").value;
  document.getElementById("demo").innerHTML ="Antwoord: " + Math.pow(num1, num2);
}