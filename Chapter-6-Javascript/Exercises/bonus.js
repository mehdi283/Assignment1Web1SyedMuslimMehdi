//  Referencing to the HTML where we will join them

const rgbValue = document.getElementById("rgb-value"); 
const colorBoxes = [  
  document.getElementById("color1"),
  document.getElementById("color2"),
  document.getElementById("color3"),
];

const report = document.getElementById("Report"); 
const livesDisplay = document.getElementById("lives"); 
const scoreDisplay = document.getElementById("score"); 
const replayBtn = document.getElementById("replay-btn"); 


//  Tracker to Track the Anser is Right
let correctIndex;
let lives = 3;
let score = 0;

//  Function to generate a random RGB color like "rgb(67, 9, 124)"
function randomRGB() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}




//  This restarts the whole game after its over
function setGame() {

  
    const colors = [randomRGB(), randomRGB(), randomRGB()];
   
    correctIndex = Math.floor(Math.random() * 3);
  
    rgbValue.textContent = colors[correctIndex];
  
  
    // Design each box in a proper and handels the colors
    colorBoxes.forEach((box, index) => {
      box.style.backgroundColor = colors[index];
      box.classList.remove("correct", "wrong"); 
      box.style.pointerEvents = "auto"; 
    });
  
  
// Reset the report
Report.textContent = "";
livesDisplay.textContent = `Lives: ${lives}`;
scoreDisplay.textContent = `Score: ${score}`;
replayBtn.style.display = "none"; 
}


  
colorBoxes.forEach((box, index) => {
    box.addEventListener("click", () => {
      if (index === correctIndex) {
  
        // right color
        box.classList.add("correct");
        Report.innerHTML = " Correct! Great job!";
        score++; // Increase score
        setTimeout(setGame, 1000); 
      } else {
  
        //  Wrong color
        box.classList.add("wrong");
       Report.innerHTML = " Incorrect! Try again!";
        lives--;
        if (lives <= 0) {
          //  If no lives left, end game
          Report.innerHTML = " Game Over! Final Score: " + score;
         
          colorBoxes.forEach((b) => (b.style.pointerEvents = "none"));
          replayBtn.style.display = "inline-block"; 
        }
      }


      // Update the lives and score
      livesDisplay.textContent = `Lives: ${lives}`;
      scoreDisplay.textContent = `Score: ${score}`;
    });
  });
  
  
  //  When replay button is clicked, restart everything 
  replayBtn.addEventListener("click", () => {
    lives = 3;
    score = 0;
    setGame();
  });
  
  
  //  Start the game when the page loads
  setGame();










