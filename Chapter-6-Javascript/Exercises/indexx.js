
// Elements 
const costPerLiterInput = document.getElementById('costPerLiter');
const litersInput = document.getElementById('liters');
const calculateBtn = document.getElementById('calculateBtn');
const totalCostDisplay = document.getElementById('totalCost');





// Click Button
calculateBtn.addEventListener('click', () => {


    

// Convert values to numbers
const costPerLiter = parseFloat(costPerLiterInput.value);
const liters = parseFloat(litersInput.value);



// Calculates the totalcost
const totalCost = costPerLiter * liters;


// Display the result with 2 decimal places
totalCostDisplay.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
});
