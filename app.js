/*============= SHOW & HIDE PASSWORD LOGIC =============*/
const input = document.getElementById("login-pass"),
    eyeIcon = document.getElementById("login-eye");

eyeIcon.addEventListener("click", ()=>{
    if(input.type == 'password'){
        input.type="text";
        eyeIcon.classList.add("fa-eye");
        eyeIcon.classList.remove("fa-eye-slash");
    }else{
        input.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
})