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
      str= str + i + " " + ","
    }
    
    }
    document.getElementById('priemtot').innerHTML="Priem getallen zijn:" + " " + str
    }else{
    document.getElementById('priemtot').innerHTML="Voer een getal in"	
    }
    }

    // Fibonacci
    function fibonacci(){
        var getal1 = 0;
        var getal2 = 1;
        var fib = document.getElementById("fib").value
    
        var ant = getal1 + getal2;
    
        document.getElementById("fibgetallen").innerHTML = "Fibonacci getallen zijn: <br> 0";

        while (ant < fib){
            document.getElementById('fibgetallen').innerHTML += "<br>" + ant;
            ant = getal1 + getal2;
            getal1 = getal2;
            getal2 = ant;
        }
    }