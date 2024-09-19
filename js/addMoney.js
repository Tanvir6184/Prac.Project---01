
document.getElementById('add-money').addEventListener('click', function(event){

    event.preventDefault();

    const inputMoney = document.getElementById('input-add-money').value;
    const inputPin = document.getElementById('pin-number').value;

    if(inputPin === '1234'){
        
        const Balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(Balance);
        const inputNumber = parseFloat(inputMoney);

        const newBalance = balanceNumber + inputNumber;

        document.getElementById('account-balance').innerText = newBalance;    

    }
    else{
        alert('wrong pin to add money')
    }
})