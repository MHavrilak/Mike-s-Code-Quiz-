var currScore = 0;
var stbutt
var time = 75;
var timer = document.getElementById("time");

var currQuest = 0;


function nextQuestion() {
  var questTitl
  questTitl = document.getElementById("questions-title");
  questTitl.innerText = questions[currQuest].title

    var choicDiv
    choicDiv = document.getElementById("choices");
    

  for(var i = 0; i < questions[currQuest].choices.length; i++) {
    var choices = document.createElement("button");
    choices.addEventListener("click", function() {
    var answer = this.innerText
    var currAnswer = questions[currQuest].answer;
    var result
    result = document.getElementById("result");
    
    if (answer == currAnswer) {
      result.innerText = "correct";
      currScore ++;
    } else { 
      result.innerText = "wrong";
      time = time - 10;
    }
    currQuest ++;

    choicDiv.innerHTML = "";

    nextQuestion()
    setTimeout(function() {
      result.innerText = "";
    }, 1500);
    })
    choices.innerText = questions[currQuest].choices[i]
    choicDiv.appendChild(choices)
  }
}

stbutt = document.getElementById("start");
stbutt.addEventListener("click", function(){
  var trivQuest
  trivQuest = document.getElementById("questions");
  trivQuest.style.display = "block";
  var stScreen
  stScreen = document.getElementById("startscreen");
  stScreen.style.display = "none";
  console.log(trivQuest);
  nextQuestion()
  var interval = setInterval(function() {
    time --;
    timer.innerText = time;
    if (time <= 0) {
      clearInterval(interval);
    }
    
  }, 1000);
}) 