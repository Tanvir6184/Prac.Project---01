
document.getElementById('cash-out').addEventListener('click', function(event){

    event.preventDefault();

    const inputTaka = document.getElementById('input-cash-out').value;
    const inputPin = document.getElementById('cash-out-pin').value;

    if(inputPin === '1234'){
        
        const accountBalance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(accountBalance);
        const inputNumber = parseFloat(inputTaka);

        const newNumber = balanceNumber - inputNumber;

        document.getElementById('account-balance').innerText = newNumber

    }
    else{
        alert('Cash out failed due to wrong pin')
    }
})