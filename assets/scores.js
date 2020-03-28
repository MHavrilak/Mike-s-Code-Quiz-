// function highScre (initials, score) {
//   var scoreEl = document.createElement("ol"),
//     i, scoreText;
//     ScriptProcessorNode.sort(function(a, b) {return b.score - a.score;});
//     scoreEl.appendChild(document.createElement('li'));
//     scoreText = scores[i].score + ":" + scores[i].name
//     scoresEl.lastChild.appendChild(document.createText(scoreText));
//   localStorage.setItem(finscore);
// } 
// parent.appendChild(scoresEl)

var clearBtn = document.getElementById('clear');

function printScores() {
    var highscore = JSON.parse(window.localStorage.getItem('highScores')) || [];

    if (highscore.length > 0) {
        highscore.forEach(function(myScore){
        var scoreLi = document.createElement('li');
        var scoreEl = document.getElementById('highscores');
        scoreLi.textContent = myScore.userName + ' - ' + myScore.score;

        scoreEl.appendChild(scoreLi);


    });
} 
}

function clear() {

    window.localStorage.removeItem('highScores');
    window.location.reload();
}

clearBtn.addEventListener('click', clear);
printScores();
// © 2020 GitHub, Inc.