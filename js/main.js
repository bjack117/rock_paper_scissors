// $(document).ready(function() {
//   handleChoices();
// });

// function handleChoices() {
//   var choices = ["#rockChoice", "#paperChoice", "#scissorsChoice"];
//   choices.forEach(function(choice) {
//     $(choice).click(function() {
      // Found regex on stackoverflow
//       var choiceString = choice.match(/[A-Z]*[^A-Z]+/g)[0];
//       compare(choiceString, computerChoice());
//     });
//   });
// }

// var userChoice = prompt("Do you choose rock, paper or scissors?");

// User will click on one of three images
// Rock, Paper, Scissors

// The choices should be used to determine which images are displayed
// in the #battleBox

// User input will be put into the compare function 
// with the computerChoice like so
// compare(userInput, computerChoice());
// this will yield the result
// use the result to determine the winner and print
// out the result to the screen

$("#rockChoice").click(function() {
  compare("rock", computerChoice());
});

$("#paperChoice").click(function() {
  compare("paper", computerChoice());
});

$("#scissorsChoice").click(function() {
  compare("scissors", computerChoice());
});

function computerChoice() {
    var choice = Math.random();
    if (choice < 0.34) {
      return "rock";
    } else if(choice <= 0.67) {
      return "paper";
    } else {
      return "scissors";
    }
}

function compare(choice1, choice2){
    handleUserChoice(choice1);
    handleComputerChoice(choice2);

    if (choice1 === choice2){
    handleResult("The result is a tie!");}
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            handleResult("rock wins");
        } else if ( choice2 === "paper" )
        {
            handleResult("paper wins");
        }
    }
    if (choice1 === "scissors") {
      if (choice2 == "rock") {
        handleResult("rock wins");
      } else if (choice2 === "paper") {
        handleResult("scissors wins");
      }
    }
    if (choice1 === "paper") {
      if (choice2 === "rock") {
        handleResult("paper wins");
      } else if (choice2 === "scissors") {
        handleResult("scissors wins");
      }
    }
}

function handleResult(result) {
  $('#resultBox').text(result);
}

function handleComputerChoice(choice) {
  $('#computerChoiceBox').text(choice);
}

function handleUserChoice(choice) {
  $('#userChoiceBox').text(choice);
}
