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
function subtract() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        num3 = num1 - num2;
        document.getElementById("result").innerHTML = "Het antwoord is : "+num3;
}

    // Machten
function berekenMacht() {
    var num1 = document.getElementById("macht").value;
    var num2 = document.getElementById("macht2").value;
  document.getElementById("result-macht").innerHTML ="Antwoord:" + "<br>" + Math.pow(num1, num2);
}
// Moeilijke berekeningen
    // Factorizer
function show_factorial(){
    x=document.getElementById("t3").value
    x=parseInt(x)
    if(Number.isInteger(x)){
    b=1
    for (i=1;i<=x;i++){
        b=b*i
    }
    document.getElementById("showfactor").innerHTML="Factor van "+x+" is : "+b;
    }else{
    document.getElementById("showfactor").innerHTML="voer volledig getal in";	
    }
}
    // Factor
function factor(){
    x=document.getElementById("t1").value
    x=parseInt(x)
    if(Number.isInteger(x)){
    str='';
    //Highest divisor can be less than half of the input number
    x1=Math.ceil(x/2)
    for(i=2;i<=x1;i++){
    if(x%i==0){
    str =  str + i + '<br>'; 
    }
    }
    document.getElementById("calculatefactor").innerHTML= x +" "+ "kan je delen door:" + '<br>' +  "1" + '<br>' + str + x +"<br>";
    }else{
    document.getElementById("calculatefactor").innerHTML="Vul een volledig getal in";	
    }	
}