var currScore = 0;
var stbutt
var time = 75;
var timer = document.getElementById("time");


var currQuest = 0;

// Function to scroll through questions
function nextQuestion() {
  var questTitl
  questTitl = document.getElementById("questions-title");
  questTitl.innerText = questions[currQuest].title

    var choicDiv
    choicDiv = document.getElementById("choices");
    
//  Loop to determine if answer if correct or wrong
  for(var i = 0; i < questions[currQuest].choices.length; i++) {
    var choices = document.createElement("button");
    choices.addEventListener("click", function() {
    var answer = this.innerText
    var currAnswer = questions[currQuest].answer;
    var result
    result = document.getElementById("result");
    
    if (answer == currAnswer) {
      result.innerText = "correct";
      currScore + 10;
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
// Takes you from landing page to quesions page
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
var finscore = "";

function(initials, score) {
  var scoreEl = document.createElement("ol"),
    i, scoreText;
    ScriptProcessorNode.sort(function(a, b) {return b.score - a.score;});
    scoreEl.appendChild(document.createElement('li'));
    scoreText = scores[i].score + ":" + scores[i].name
    scoresEl.lastCHild.appendChild(document.createText(scoreText));
  localStorage.setItem(finscore);
} parent.appendChild(scoresEl);