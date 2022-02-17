
function getInputAmount(expensesSector) {
    const SectorInput = document.getElementById(expensesSector + '-input');
    const SectorInputText = SectorInput.value;
    const SectorInputAmount = parseInt(SectorInputText);
    return SectorInputAmount;
}

function updateBalance(){

    // find total income amount
    const incomeInputAmount = getInputAmount('income');

    // find food expenses amount 
    const foodInputAmount = getInputAmount('food');

    // find rent expenses amount 
    const rentInputAmount = getInputAmount('rent');
  
    // find clothes expenses amount 
    const clothesInputAmount = getInputAmount('clothes');
  
    //calculate total expenses amount
    const  calculateTotalExpenses = foodInputAmount + rentInputAmount + clothesInputAmount;
    
    // update expenses total
    const expensesTotal = document.getElementById('expenses-total');
    expensesTotal.innerText = calculateTotalExpenses;
    
    // update balance after expenses total
    const balance = incomeInputAmount - calculateTotalExpenses;

    return balance;
}

// handel calculate button event
document.getElementById('calculate-button').addEventListener('click', function () {
     
    // update balance after expenses total
    const balance = updateBalance();
    const balanceAfterExpenses = document.getElementById('balance_after_expenses');
    balanceAfterExpenses.innerText = balance;

});


document.getElementById('save-button').addEventListener('click', function(){

    // find income amount & save percentage 
    const incomeInputAmount = getInputAmount('income');
    const saveInputPercentage = getInputAmount('save');

    // update save amount
    const saveAmount = incomeInputAmount * (saveInputPercentage / 100);
    const savingTotal = document.getElementById('saving-total');
    savingTotal.innerText = saveAmount;

    // update remaining amount 
    const remainingBalance = updateBalance() - saveAmount;
    const remainingTotal = document.getElementById('Remaining-balance');
    remainingTotal.innerText = remainingBalance;


})