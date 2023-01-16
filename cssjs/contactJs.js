const form = document.getElementById("form");
const submitMessage = document.getElementById('submit-message');
const serverMessage = document.querySelector('.main__server--message');
const nameMessage = document.querySelector('.name-validation-message');
const emailMessage = document.querySelector('.email-validation-message');
const validateForm = ()=>{
    let fullName = document.getElementById('full-name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value
    let name = fullName.split(' ');
    let atPosition = email.indexOf('@');
    let dotPosition = email.lastIndexOf('.');

    if (fullName===null || fullName ===""){
        nameMessage.innerHTML = "<p>Name can not be empty!</p>"
        serverMessage.innerHTML ='';
        emailMessage.innerHTML = '';
        return false
    }else if(name.length !== 2){
        nameMessage.innerHTML = "<p>Please enter your full name!</p>"
        serverMessage.innerHTML ='';
        emailMessage.innerHTML = '';
        return false;
    }else if(!(name[0].match(/^[A-Za-z]+$/) && name[1].match(/^[A-Za-z]+$/))){
        nameMessage.innerHTML("<p>name should only contains letters</p>")
        serverMessage.innerHTML ='';
        emailMessage.innerHTML = '';
        return false;
    }
    else if(email ===null || email ===""){
        emailMessage.innerHTML = "<p>Email can not be empty!</p>"
        serverMessage.innerHTML ='';
        nameMessage.innerHTML = '';
        return false;
    }else if(atPosition<1 || dotPosition<atPosition+2 || dotPosition+2===email.length){
        emailMessage.innerHTML = "<p>please enter a valid email address!</p>"
        serverMessage.innerHTML ='';
        nameMessage.innerHTML = '';
        return false;
    }else if( message===''){
        serverMessage.innerHTML = "<p>Message can not be empty!</p>"
        nameMessage.innerHTML = '';
        emailMessage.innerHTML = '';
        return false;
    }
    else{
        nameMessage.innerHTML = '';
        emailMessage.innerHTML = '';
        document.getElementById('full-name').value= '';
        document.getElementById('email').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value ='';
        serverMessage.innerHTML = "<p>Thank you for submitting. we will reach you soon.</p>"
    }
}
submitMessage.addEventListener('click', validateForm)