
// Elements 

const costPerLiterInput = document.getElementById('CostPerLiter');

const litersInput = document.getElementById('Liters');

const calculateBtn = document.getElementById('CalculateBtn');

const totalCostDisplay = document.getElementById('TotalCost');



// Click Button

calculateBtn.addEventListener('click', () => {



// Convert values to numbers

const costPerLiter = parseFloat(costPerLiterInput.value);

const liters = parseFloat(litersInput.value);




// This code will calculate total cost

const totalCost = costPerLiter * liters;



// This will display the results in two decimal numbers

totalCostDisplay.textContent = `Total Cost: ${totalCost.toFixed(2)}`;
});



