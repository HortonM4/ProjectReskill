window.onload = function () {

  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,

     // An object that holds all the questions + possible answers..
     // In the array --> last digit gives the right answer position
      allQuestions = {
        'In 2019 what % of the UK population were struggling to afford necessities?' : ['10%','90%','75%','45%', 3],

        'Approximately how many UK adults dont have a bank account?' : [ '250,000','1,000,000','5,000,000','500,000', 1],

        'A percentage paid to a lender for the use of borrowed money is called?' : ['Credit','Debit','Loan','Interest', 3],

        'What % of the UK population said they didnt feel confident managing their money?' : ['39','5','95','50', 0],

        'Pins and Passwords can be shared with?' : ['Partner', 'Nobody' , 'Best Friend','Children',1],

        'In August 2022 the average UK adult had how much unsecured debt' : ['£5762','£3877','£65986','£7783', 1],

        'ATM can be used for?' : ['Both', 'Balance Enquiry', 'Cash Withdrawal', 0],

        'Which is the best way to pay for something to get purchase protection?': ['Cash','Bank transfer', 'Credit Card', 'Debit Card', 2],

        'In the year 2021-2022 which food item increased the most in price?'  : ['Eggs', 'Pasta','Rice','Potatoes', 1],

        'At what age will most banks allow you to have a debit card': ['6', '16', '11','18', 2]
      };

  function loadQuestion(curr) {
  // This function loads all the question into the questionArea
  // It grabs the current question based on the 'current'-variable

    var question = Object.keys(allQuestions)[curr];

    questionArea.innerHTML = '';
    questionArea.innerHTML = question;
  }
   function loadAnswers(curr) {
    // This function loads all the possible answers of the given question
    // It grabs the needed answer-array with the help of the current-variable
    // Every answer is added with an 'onclick'-function

      var answers = allQuestions[Object.keys(allQuestions)[curr]];

      answerArea.innerHTML = '';

      for (var i = 0; i < answers.length -1; i += 1) {
        var createDiv = document.createElement('div'),
            text = document.createTextNode(answers[i]);

        createDiv.appendChild(text);
        createDiv.addEventListener("click", checkAnswer(i, answers));


        answerArea.appendChild(createDiv);
      }
    }

    function checkAnswer(i, arr) {
      // This is the function that will run, when clicked on one of the answers
      // Check if givenAnswer is sams as the correct one
      // After this, check if it's the last question:
      // If it is: empty the answerArea and let them know it's done.

      return function () {
       var givenAnswer = i,
                correctAnswer = arr[arr.length-1];

            if (givenAnswer === correctAnswer) {
              addChecker(true);
            } else {
              addChecker(false);
            }

            if (current < Object.keys(allQuestions).length -1) {
              current += 1;

              loadQuestion(current);
              loadAnswers(current);
            } else {
              questionArea.innerHTML = 'Quiz Complete';
              answerArea.innerHTML = '';
            }

          };
        }

        function addChecker(bool) {
        // This function adds a div element to the page
        // Used to see if it was correct or false

          var createDiv = document.createElement('div'),
              txt       = document.createTextNode(current + 1);
               createDiv.appendChild(txt);

                  if (bool) {

                    createDiv.className += 'correct';
                    checker.appendChild(createDiv);
                  } else {
                    createDiv.className += 'false';
                    checker.appendChild(createDiv);
                  }
                }


                // Start the quiz right away
                loadQuestion(current);
                loadAnswers(current);
                }
