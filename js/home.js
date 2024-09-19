
document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoneyInput = document.getElementById('input-add-money').value;
    const inputPin = document.getElementById('pin-number').value;

    if(inputPin === '1234'){
        
        const Balance = document.getElementById('account-balance').innerText;
     
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(Balance);
     
        const newBalance = addMoneyNumber + balanceNumber;
        
        document.getElementById('account-balance').innerText = newBalance;

    }
    else {
        alert('Failed to add money')
    }



})