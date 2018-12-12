var word = "";
var countries=["peru","canada","vietnam","france","egypt"];
var animals=["elephant","tiger","dolphin","crocodile","squirrel"];
var random=["cornucopia","xenophobia","onomatopoeia","extraordinary","sphinx"];
var guesses=6;
var guessedLetters=[];
var allLetters=["a","b", "c", "d", "e" ,"f", "g", "h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var graveyard=[];
function startGame(){
    reloadGame();
    document.getElementById("beginning").innerHTML = "";
    var category = document.getElementById("categories").value;
    var rand = "";
    parseInt(category);
    if(category==1){
         rand = countries[Math.floor(Math.random() * countries.length)];
    }
    if(category==2){
         rand = animals[Math.floor(Math.random() * animals.length)];
    }
    if(category==3){
        rand = random[Math.floor(Math.random() * random.length)];
    }

    word=rand;
    console.log(rand);
    createButtons();
    printWord();
    document.getElementById("note").innerHTML = "(Note: Click Play! to start over)"


}

function createButtons(){
    var button = document.getElementById("buttons");
    var letter = "";
    for(var i=0; i<=allLetters.length-1; i++){
        letter+="<button  id= '" + allLetters[i] + "' onclick='guessLetter(this.id)' type=\"button\" class=\"btn btn-secondary\"> " + allLetters[i] + "</button>";
    }

    button.innerHTML=letter;
    
}

function guessLetter(letter){
    guessedLetters.push(letter);
    document.getElementById(letter).disabled=true;

    if(word.indexOf(letter) == -1){
        graveyard.push(letter);
        guesses=guesses-1;
    }

    document.getElementById("graveyard").innerHTML = "Graveyard: " + graveyard;
    document.getElementById("guesses").innerHTML = "Guesses: " + guesses;
    if(guesses==0){
        document.getElementById("winOrLose").innerHTML="You suck. Try again.";
        for(var i=0; i<allLetters.length; i++){
            document.getElementById(allLetters[i]).disabled=true
        }

    }

    printWord();
}

function printWord(){
    var answer="";
    for(var i=0; i<word.length; i++){
        if(guessedLetters.indexOf(word[i]) !==-1){
            answer+= word[i];
        } else {
            answer+= "_ "
        }
    }
    document.getElementById("word").innerHTML = answer;
    if(answer==word){
        document.getElementById("winOrLose").innerHTML="Congratulations!!! You won."
        for(var i=0; i<allLetters.length; i++){
            document.getElementById(allLetters[i]).disabled=true
        }
    }
    if(guesses==6){
        document.getElementById("image").src = "img/Hangman-0.png";
    }
    if(guesses==5){
        document.getElementById("image").src = "img/Hangman-1.png"
    }
    if(guesses==4){
        document.getElementById("image").src = "img/Hangman-2.png"
    }
    if(guesses==3){
        document.getElementById("image").src = "img/Hangman-3.png"
    }
    if(guesses==2){
        document.getElementById("image").src = "img/Hangman-4.png"
    }
    if(guesses==1){
        document.getElementById("image").src = "img/Hangman-5.png"
    }
    if(guesses==0){
        document.getElementById("image").src = "img/Hangman-6.png"
    }

}
function reloadGame(){
    guessedLetters = [];
    guesses = 6;
    graveyard = [];
    createButtons();
    document.getElementById("graveyard").innerHTML = "Graveyard: " + graveyard;
    document.getElementById("guesses").innerHTML = "Guesses: " + guesses;
    document.getElementById("winOrLose").innerHTML = "";

}