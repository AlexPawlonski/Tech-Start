/*:::::::::::::::::::GENERAL:::::::::::::::::::::::::*/


var game = document.getElementById('game');
var input = document.getElementById('zoneInput');

function submit(event){
    if(event.keyCode == 13){
    //var textGame = game.innerText || game.textContent;
    var test = input.value
    
    var result = newP.textContent = test;
    game.append(result);
    }
}
