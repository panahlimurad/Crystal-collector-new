$(document).ready(function () {
    

    let numberMatch;

    let firstCrystal;
    let secondtCrystal;

    let thirdCrystal;
    
    let fourthCrystal;


    let wins = 0
    let loses = 0

    let calculateScore = 0
    // $(".calculate-score").html(calculateScore);

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
            resetGame()
        } else if (calculateScore > numberMatch) {
            lose()
            reset();
            resetGame();
        }

    }

    function blue() {
        calculateScore += secondtCrystal
        $(".calculate-score").html(calculateScore);
       if (calculateScore == numberMatch) {
         win();
         reset();
         resetGame();
       } else if (calculateScore > numberMatch) {
         lose();
         reset();
         resetGame();
       }
    }

    function red() {
        calculateScore += thirdCrystal
        $(".calculate-score").html(calculateScore);
       if (calculateScore == numberMatch) {
         win();
         reset();
         resetGame();
       } else if (calculateScore > numberMatch) {
         lose();
         reset();
         resetGame();
       }
    }

    function pink() {
        calculateScore += fourthCrystal
        $(".calculate-score").html(calculateScore);
        if (calculateScore == numberMatch) {
          win();
          reset();
          resetGame();
        } else if (calculateScore > numberMatch) {
          lose();
          reset();
          resetGame();
        }
    }


    function reset() {
        calculateScore = 0
        $(".calculate-score").html(calculateScore);
    }

    function resetGame() {
        numberMatch = Math.floor(Math.random() * (150 - 40 + 1) + 40);
        $(".numberMatch").html(numberMatch);
        console.log(numberMatch);

        firstCrystal = Math.floor(Math.random() * (15 + 1) + 1);
        console.log(firstCrystal);

        secondtCrystal = Math.floor(Math.random() * (15 + 1) + 1);
        console.log(secondtCrystal);

        thirdCrystal = Math.floor(Math.random() * (15 + 1) + 1);
        console.log(thirdCrystal);

        fourthCrystal = Math.floor(Math.random() * (15 + 1) + 1);
        console.log(fourthCrystal);
    }

    $(document).on("click", ".lightBlue", lightBlue)
    $(document).on("click", ".blue", blue)
    $(document).on("click", ".red", red)
    $(document).on("click", ".pink", pink);


});