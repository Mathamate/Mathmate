// Makkelijke berekeningen
    // Plus, min, delen, vermenigvuldigen
function showMultiply(){
    multiplyBy();
    uitlegMultiply();
}
function multiplyBy(){
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        num3 = num1 * num2;
        document.getElementById("result").innerHTML = "Het antwoord is : "+num3;
}
function uitlegMultiply(){
    document.getElementById("uitleg").innerHTML = "Als je" + " " + num1 + " " + num2 + "x" + " " + "bij elkaar optelt krijg je" + " " + num3;
}
function showDivide(){
    divideBy();
    uitlegDevide();
}
function divideBy() { 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        num3 = num1 / num2;
        num3 = num3.toFixed(2);
        document.getElementById("result").innerHTML = "Het antwoord is : "+num3;
}
function uitlegDevide() {
    document.getElementById("uitleg").innerHTML = "Als je" + " " + num1 + " " + "deelt door" + " " + num2 + " " + "houd je" + " " + num3 + " " + "over";
}
function showPlus(){
    plus();
    uitlegPlus();
}
function plus() { 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        num3 = +num1 + +num2;
        document.getElementById("result").innerHTML = "Het antwoord is : "+num3;
}
function uitlegPlus() {
    document.getElementById("uitleg").innerHTML = "Als je" + " " + num1 + " " + "+" + " " + num2 + " " + "doet krijg je" + " " + num3;
}
function showSubtract() {
    subtract();
    uitlegSubtract();
}
function subtract() { 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        num3 = num1 - num2;
        document.getElementById("result").innerHTML = "Het antwoord is : "+num3;
}
function uitlegSubtract() {
    document.getElementById("uitleg").innerHTML = "Als je" + " " + num1 + " " + "-" + " " + num2 + " " + "doet krijg je" + " " + num3;
}
    // Machten
function showMacht(){
    berekenMacht();
    uitlegMacht();
}
function berekenMacht() {
     num1 = document.getElementById("macht").value;
     num2 = document.getElementById("macht2").value;
     num3 = Math.pow(num1, num2);
  document.getElementById("result-macht").innerHTML ="Antwoord:" + "<br>" + num3;
}
function uitlegMacht(){
    document.getElementById("uitleg").innerHTML = "Als je" + " " + num2 + "x" + " "  + num1 + " " + "doet krijg je" + " " + num3;
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
    document.getElementById("showfactor").innerHTML="Factor van "+x+ " is : " +"<br>" + b;
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