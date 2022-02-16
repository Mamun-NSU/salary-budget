
// handel calculate button event
document.getElementById('calculate-button').addEventListener('click', function () {

    // find food expenses amount 
    const foodInput = document.getElementById('food-input');
    const foodInputText = foodInput.value;
    const foodInputAmount = parseInt(foodInputText);

    // find rent expenses amount 
    const rentInput = document.getElementById('rent-input');
    const rentInputText = rentInput.value;
    const rentInputAmount = parseInt(rentInputText);

    // find clothes expenses amount 
    const clothesInput = document.getElementById('clothes-input');
    const clothesInputText = clothesInput.value;
    const clothesInputAmount = parseInt(clothesInputText);

    //calculate total amount
    const calculateTotalAmount = foodInputAmount + rentInputAmount + clothesInputAmount;

    // update expenses total
    const expensesTotal = document.getElementById('expenses-total');
    expensesTotal.innerText = calculateTotalAmount;

})