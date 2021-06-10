window.onload = function(){
    tafels()
    Calculate()
    verwijder();
}
function tafels(){
//     var output;
//     output = document.getElementById('uitvoer');
//     output.innerHTML = "Test";
    // var tafelTot = 10;
    // var tafelGetal = document.getElementById('invoer2');
    // var teller = document.getElementById('invoer1');
}
function Calculate(){
    var button = document.getElementById('Bereken-knop');
    var output;
    output = document.getElementById('uitvoer'); // NIET VERWIJDEREN
    var tafelTot = 10;
    var tafelGetal = document.getElementById('invoer2');
    var teller = document.getElementById('invoer1');

    button.onclick = function(){
        var output;
        output = document.getElementById('uitvoer');
        var tafelTot = 10;
        var tafelGetal = document.getElementById('invoer2');
        var teller = document.getElementById('invoer1');
        
        while(teller <= tafelTot){
            output.innerHTML = tafelGetal + " X " + teller + " = " + tafelGetal * teller;
            teller++;
        }
        // berekenen werkt nog niet
}
}
function verwijder(){
    var delBut = document.getElementById('Clear');
    var output;
        output = document.getElementById('uitvoer');
    delBut.onclick = function(){
        var output;
        output = document.getElementById('uitvoer');
        output.innerHTML = " ";
    }
}