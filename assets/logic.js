var currScore = 0;
var stbutt
var time = 75;
var timer = document.getElementById("time");
var scoreEl = document.getElementById('final-score');
var nameEl = document.getElementById('initials');



var currQuest = 0;

var interval = setInterval(function() {
  time --;
  timer.innerText = time;
  if (time <= 0) {
    clearInterval(interval);
  }
  
}, 1000);

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
      currScore = currScore + 10;
    } else { 
      result.innerText = "wrong";
      time = time - 10;
    }
    currQuest ++;

    choicDiv.innerHTML = "";

    if (currQuest < questions.length) {nextQuestion()
    setTimeout(function() {
      result.innerText = "";
    }, 1500);

    
    } else {
      // alert ("You Final Score is " + currScore)
      endQuiz(currScore);
      // endScreen = getElementById("end-screen")
    }
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

})


var finscore = "";

function endQuiz(currScore) {
  clearInterval(interval);
  alert(currScore);
  document.getElementById("final-score").innerHTML=currScore
 

  var endScreen = document.getElementById("questions");

  endScreen.style.display="block";

  document.getElementById("questions").style.display="none";

  document.getElementById("end-screen").style.display="block";

  
  // endScreen.removeAttribute("questions");

  // questionsDiv.setAttribute("class", "hide");
  // scoreEl.textContent = time;
  // console.log(time);

  // timer.textContent = 0;
}


function submitScore() {

  var name = nameEl.value;
  if (name !== "") {

      var highscore = JSON.parse(localStorage.getItem('highScores')) || [];
 

      var myScore = {
          score: scoreEl.innerText,
          userName: name
      };

      highscore.push(myScore);
      window.localStorage.setItem('highScores', JSON.stringify(highscore));

      window.location.href = 'highscores.html';
  }
}
// startButton.addEventListener('click', begin)



// }

