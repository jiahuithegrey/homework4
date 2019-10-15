var questions = [
    {
        title: "Which subject at Hogwarts is taught by Professor Binns?",
        choices: ["Ancient Runes", "Muggle Studies", "Arithmancy", "History of Magic"],
        answer: "History of Magic"
    },
    {
        title: "Which Defence Against the Dark Arts teacher filled his office with pictures of himself?",
        choices: ["Professor Lupin", "Professor Lockhart", "Professor Snape", "Professor Moody"],
        answer: "Professor Lockhart"
    },
    {
        title: "How many known secret passages lead from Hogwarts to Hogsmeade?",
        choices: ["6", "7", "8", "9"],
        answer: "7"
    },
    {
        title: "Who was the first student in Harry’s year to be sorted into Gryffindor?",
        choices: ["Lavender Brown", "Susan Bones", "Mandy Brocklehurst", "Hannah Abbott"],
        answer: "Lavender Brown"
    },
    {
        title: "How many staircases are there at Hogwarts?",
        choices: ["218", "96", "312", "142"],
        answer: "142"
    }
];
// As soon as the question starts, timer begins
var timeInterval = setTime();
var timerEl = document.querySelector("#timer-number");

var questionEl = document.querySelector("#question");
var choiceEl = document.querySelectorAll(".buttonName");
var buttonEl = document.querySelectorAll(".choiceBtn");

var score = 0;
var qIndex = 0;
var alertEl = document.querySelector("#alert");

function nextQuestion(){
    questionEl.textContent = questions[qIndex].title;

    for (var i=0; i<questions[qIndex].choices.length; i++){
        choiceEl[i].textContent = questions[qIndex].choices[i]; 

        buttonEl[i].addEventListener("click", function(event){
            var userChoice = event.target.textContent;
            if (userChoice === questions[qIndex].answer){
                alertEl.textContent = "Correct!";
                score+=10;
            }else{
                alertEl.textContent = "Wrong!";
                secondsLeft = secondsLeft-15;
            }

            if (qIndex<questions.length){
                qIndex++;
                }else{
                    clearInterval(timerInterval);
                    alert("Game Over! Your total score is " + score);
                }
                //buttonEl.innerHTML ="";
                return nextQuestion();
        });
    }
}
nextQuestion();

    var secondsLeft=75;

    function setTime(){
        var timeInterval = setInterval(function(){
            secondsLeft--;
            timerEl.textContent=secondsLeft;

            if(secondsLeft === 0){
                clearInterval(timerInterval);
                sendMessage();
            }
        }, 1000);
        return timeInterval;
    }

    function sendMessage(){
    timeEl.textContent = "Time's Up!";
    }
    
