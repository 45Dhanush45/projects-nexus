const form = document.getElementById("form")
const username = document.getElementById("username")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")
const email = document.getElementById("email")


form.addEventListener("submit",(e) =>{
    e.preventDefault();
    validateInput()
})

function validateInput() {
    
    const passwordVal = password.value.trim();
    const password2Val = password2.value.trim();
    const emailVal = email.value.trim();
    const usernameVal = username.value.trim();

    if(usernameVal === ''){
        setError(username,"please enter the username");
    }
    else{
        setSuccess(username);
    }

    
    if(emailVal === ''){
        setError(email,"please enter the email");
    }
    else if(!isEmail(emailVal)){
        setError(email,"Not a valid email");
    }
    else{
        setSuccess(email);
    }


    
    if(passwordVal === ''){
        setError(password,"please enter the username");
    }
    else{
        setSuccess(password);
    }


    if(password2Val === ''){
        setError(password2,"please enter the username");
    }
    else if(passwordVal !== password2Val){
        setError(password2,"password doesn't match")
    }
    else{
        setSuccess(password2);
    }

    function setError(element ,message){
        const formControl = element.parentElement;

        const errorElement = formControl.querySelector(".error");

        console.log(errorElement);

        errorElement.innerText = message;
        formControl.classList.add("error")
        formControl.classList.remove("success")


    }

    function setSuccess(element){
        const formControl = element.parentElement;
        const errorElement = formControl.querySelector(".error");

        errorElement.innerText = '';
        formControl.classList.add("success")
        formControl.classList.remove("error")
        

    }

    function isEmail(email){
        // You need to implement email validation logic here
        return /\S+@\S+\.\S+/.test(email);
    }
    



}

