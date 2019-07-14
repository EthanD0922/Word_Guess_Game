// var questions =[
//     "eleven",
//     "dustin",
//     "mike",
//     "lucas",
//     "will",
//     "nancy",
//     "hopper",
//     "steve",
//     "max",
//     "jonathan",
//     "joyce",
//     "erica",
//     "robin",
// ];

// var activeQuestion = questions[Math.floor(Math.random()*questions.length)]
// // var starLength = 0
// // var characters = document.getElementById("character")
//         // for (i=0; i< activeQuestion.length + 1; i++){
//         //     var blanks = document.createElement("div");
//         //     blanks.textContent = questions[i];
//         //     characters.appendChild(blanks);
//         // }


var drinkList = [
    "Coffee: $5",
    "Espresso: $7",
    "Cappuccino: $6",
    "Latte: $4",
    "Tea: $3",
    "Ice Coffee: $6",
    "Ice Espresso: $8",
    "Ice Latte: $6",
    "Ice Tea: $4"
];

var targetDiv = document.getElementById("drink-options")
for (var i = 0; i < drinkList.length; i++) {
    var babyDiv = document.createElement("div");
    babyDiv.textContent = drinkList[i];
    targetDiv.appendChild(babyDiv);
}
