var questions =[
    "max",
    "mike",
    "will",
    "joyce",
    "erica",
    "robin",
    "lucas",
    "nancy",
    "steve",
    "hopper",
    "eleven",
    "dustin",
    "jonathan",  
];

var wins = "0"

var x = 0
function gameOver(){
    document.querySelector("#winsCount").textContent = "You contacted: " + wins + " members!";
    document.querySelector("#fails").textContent = "";
    document.querySelector("#guesses").textContent = " ";
    document.querySelector("#character").textContent = "";
}

function start(){
var dashes =[

];

var userGuessed = [ 

];
var attemptsLeft = 10
document.querySelector("#winsCount").textContent = wins;
document.querySelector("#fails").textContent = attemptsLeft;


var activeQuestion = questions[x]
var wordArray = activeQuestion.split("")
var length = 0
var character = document.getElementById("character")
   

    for (i=0; i< activeQuestion.length; i++) {
        var newDashP = document.createElement("p");
        dashes[i] = "-"
        character.appendChild(newDashP)
    
    }
    newDashP.textContent = dashes
    document.onkeyup = function test(event) {
       
         var letter = event.key.toLowerCase();
        if (event.keyCode >= 65 &&  event.keyCode <= 90){
            
            for (p=0;p < userGuessed.length; p++){
                if (letter === userGuessed[p]){
                    console.log("same")
                    return;
                }
            
            }
            attemptsLeft --
            document.querySelector("#fails").textContent = attemptsLeft;
                userGuessed[userGuessed.length] = letter
            if (attemptsLeft <= 0){
                gameOver()
            }
                
            document.querySelector("#guesses").textContent = userGuessed;
                if (userGuessed.indexOf(letter) === (userGuessed.length -1)){
                    for (i=0; i< activeQuestion.length; i++){
                    
                        if (letter === wordArray[i]){
                            length ++
                            attemptsLeft ++     
                            dashes[i] = letter
                            newDashP.textContent = dashes
                            }
                        
                        // console.log(length)
                        if (length === activeQuestion.length){
                            document.querySelector("#guesses").textContent = "";
                            wins ++
                            x ++
                            newDashP.textContent = ""
                            if (x === questions.length - 1){
                                gameOver()
                            }
                            start();
                            }
                    }
                
                
                }
        }
    }  
}

start()