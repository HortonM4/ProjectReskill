function checkAnswers() {
  var score = 0;

  if (document.getElementById("correct").checked) {
    score++;
  }


  document.getElementById("result").innerHTML = "Your score is " + score + " out of x.";
}
