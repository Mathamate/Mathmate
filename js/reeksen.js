// Priemgetallen
function show_prime(){
    x=document.getElementById("t2").value
    x=parseInt(x)
    if(Number.isInteger(x)){
    str='';
    for (i=2;i<x;i++){
      flag=0;
      
      for(j=2;j<i;j++){
      if(i%j == 0){
      flag=1;
      break;
      }
      
      }	
     if(flag==0){
      str= str + i + ","
    }
    
    }
    document.getElementById('d2').innerHTML="Priem getallen zijn :  " + str
    }else{
    document.getElementById('d2').innerHTML="Voer een getal in  "	
    }
    }

    // Fibonacci
    function fibonacci(){
        var getal1 = 0;
        var getal2 = 1;
        var fib = document.getElementById("fib").value
    
        var ant = getal1 + getal2;
    
        document.getElementById("d3").innerHTML = "0";

        while (ant < fib){
            document.getElementById('d3').innerHTML += "-" + ant;
            ant = getal1 + getal2;
            getal1 = getal2;
            getal2 = ant;
        }
    }