
document.getElementById('button-login').addEventListener('click', function(event){

    event.preventDefault(); 

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    console.log(phoneNumber, pinNumber)

// temporary work do not do this 

    if(phoneNumber === '1' && pinNumber === '1234'){
        
        window.location.href = '/home.html'
       
    }
    else {
        return alert('wrong pin or phone number')
    }
})