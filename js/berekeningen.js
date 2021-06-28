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
    document.getElementById("d3").innerHTML="Factor van "+x+" is : "+b;
    }else{
    document.getElementById("d3").innerHTML="voer volledig getal in";	
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
    str = str + i + ',' 
    }
    }
    document.getElementById("d1").innerHTML= x +" "+ "kan je delen door, 1 " + str + x +"<br>";
    }else{
    document.getElementById("d1").innerHTML="Vul een volledig getal in";	
    }	
}