$(document).ready(function () {
    
  // random Number
    let numberMatch;

  // crystal random numer
    let firstCrystal;
    let secondtCrystal;
    let thirdCrystal;
    let fourthCrystal;


    let wins = 0
    let loses = 0

    let calculateScore = 0

    resetGame()
    reset()


    function win() {
        wins += 1
        $(".win").html(wins)
        resetGame()
        reset()
    }

    function lose() {
        loses += 1
        $(".lose").html(loses)
        resetGame();
        reset();
    }

    function lightBlue() {
        calculateScore += firstCrystal
        $(".calculate-score").html(calculateScore);
        if (calculateScore == numberMatch) {
            win()
            reset()
        } else if (calculateScore > numberMatch) {
            lose()
            reset();
        }

    }

    function blue() {
        calculateScore += secondtCrystal
        $(".calculate-score").html(calculateScore);
       if (calculateScore == numberMatch) {
         win();
         reset();
       } else if (calculateScore > numberMatch) {
         lose();
         reset();
       }
    }

    function red() {
        calculateScore += thirdCrystal
        $(".calculate-score").html(calculateScore);
       if (calculateScore == numberMatch) {
         win();
         reset();
       } else if (calculateScore > numberMatch) {
         lose();
         reset();
       }
    }

    function pink() {
        calculateScore += fourthCrystal
        $(".calculate-score").html(calculateScore);
        if (calculateScore == numberMatch) {
          win();
          reset();
        } else if (calculateScore > numberMatch) {
          lose();
          reset();
        }
    }


    function reset() {
        calculateScore = 0
        $(".calculate-score").html(calculateScore);
    }

    function resetGame() {
        numberMatch = Math.floor(Math.random() * (121 - 19 + 1) + 19);
        $(".numberMatch").html(numberMatch);

        firstCrystal = Math.floor(Math.random() * 14 + 1);

        secondtCrystal = Math.floor(Math.random() * 14 + 1);

        thirdCrystal = Math.floor(Math.random() * 14 + 1);

        fourthCrystal = Math.floor(Math.random() * 14 + 1);
    }

    $(document).on("click", ".lightBlue", lightBlue)
    $(document).on("click", ".blue", blue)
    $(document).on("click", ".red", red)
    $(document).on("click", ".pink", pink);


});