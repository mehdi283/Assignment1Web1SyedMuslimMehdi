//  Referencing to the HTML where we will join them

const rgbValue = document.getElementById("rgb-value"); 
const colorBoxes = [  
  document.getElementById("color1"),
  document.getElementById("color2"),
  document.getElementById("color3"),
];

const feedback = document.getElementById("report"); 
const livesDisplay = document.getElementById("lives"); 
const scoreDisplay = document.getElementById("score"); 
const replayBtn = document.getElementById("replay-btn"); 


//  Tracker to Track the Anser is Right
let correctIndex;
let lives = 3;
let score = 0;

//  Function to generate a random RGB color like "rgb(144, 92, 212)"
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
    report.textContent = "";
    livesDisplay.textContent = `Lives: ${lives}`;
    scoreDisplay.textContent = `Score: ${score}`;
    replayBtn.style.display = "none"; 
  }