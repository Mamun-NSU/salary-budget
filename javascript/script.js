
// this is common get input amount function by using field id
function getInputAmount(expensesSector) {

    const SectorInput = document.getElementById(expensesSector + '-input');
    const SectorInputText = SectorInput.value;
    const SectorInputAmount = parseInt(SectorInputText);

    if (isNaN(SectorInputAmount)) {
        alert("Input  for '" + expensesSector + '-input' + "' field must be number")
        return 0;
    }
    if (SectorInputAmount < 0) {
        alert("Please enter positive value for '" + expensesSector + '-input' + "' field")
        return 0;
    }

    return SectorInputAmount;
}

// this is common update crrunt balance function
function updateBalance() {

    //calculate total expenses amount
    const calculateTotalExpenses = getInputAmount('food') + getInputAmount('rent') + getInputAmount('clothes');

    //calculate balance after expenses total
    const balance = getInputAmount('income') - calculateTotalExpenses;

    return balance;
}

// handel calculate button event
document.getElementById('calculate-button').addEventListener('click', function () {

    // find total income amount 
    const incomeAmount = getInputAmount('income');

    // find food expenses amount 
    const foodInputAmount = getInputAmount('food');

    // find rent expenses amount 
    const rentInputAmount = getInputAmount('rent');

    // find clothes expenses amount 
    const clothesInputAmount = getInputAmount('clothes');

    //calculate total expenses amount
    const calculateTotalExpenses = foodInputAmount + rentInputAmount + clothesInputAmount;

    // update balance after expenses total
    const balance = updateBalance();
    const balanceAfterExpenses = document.getElementById('balance_after_expenses');
    balanceAfterExpenses.innerText = balance;

    // update expenses total
    const expensesTotal = document.getElementById('expenses-total');
    // checking condition & show message if the total expenses is bigger than total income
    if (calculateTotalExpenses > incomeAmount) {
        alert('Sorry, your expenses is more than your income!!!');
        expensesTotal.innerText = 0;
        balanceAfterExpenses.innerText = incomeAmount;
    } else {
        expensesTotal.innerText = calculateTotalExpenses;
    }

});

// handel save button event
document.getElementById('save-button').addEventListener('click', function () {

    const balance = updateBalance();
    // find income amount & save percentage 
    const incomeInputAmount = getInputAmount('income');
    const saveInputPercentage = getInputAmount('save');

    // update save amount
    const saveAmount = incomeInputAmount * (saveInputPercentage / 100);
    const savingTotal = document.getElementById('saving-total');

    const remainingBalance = updateBalance() - saveAmount;
    const remainingTotal = document.getElementById('Remaining-balance');


    // check condition: where save amount is biger than  balance 
    if (saveAmount > balance) {
        savingTotal.innerText = 0;
        remainingTotal.innerText = balance;
        alert('you have not enough balance for saving');
    } else {
        savingTotal.innerText = saveAmount;
        remainingTotal.innerText = remainingBalance;
    }

})