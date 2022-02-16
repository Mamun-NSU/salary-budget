
function getInputAmount(expensesSector) {
    const SectorInput = document.getElementById(expensesSector + '-input');
    const SectorInputText = SectorInput.value;
    const SectorInputAmount = parseInt(SectorInputText);
    return SectorInputAmount;
}


// handel calculate button event
document.getElementById('calculate-button').addEventListener('click', function () {

    // find food expenses amount 
    /* const foodInput = document.getElementById('food-input');
    const foodInputText = foodInput.value;
    const foodInputAmount = parseInt(foodInputText); */

    const foodInputAmount = getInputAmount('food');


    // find rent expenses amount 
    /*  const rentInput = document.getElementById('rent-input');
     const rentInputText = rentInput.value;
     const rentInputAmount = parseInt(rentInputText); */

    const rentInputAmount = getInputAmount('rent');

    // find clothes expenses amount 
    /* const clothesInput = document.getElementById('clothes-input');
    const clothesInputText = clothesInput.value;
    const clothesInputAmount = parseInt(clothesInputText); */

    const clothesInputAmount = getInputAmount('clothes');

    //calculate total amount
    const calculateTotalAmount = foodInputAmount + rentInputAmount + clothesInputAmount;

    // update expenses total
    const expensesTotal = document.getElementById('expenses-total');
    expensesTotal.innerText = calculateTotalAmount;

})