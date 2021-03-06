function buttonLogin(){
    var btnLogin = document.getElementById("btn-login");

    btnLogin.addEventListener("mouseover", () => {
        btnLogin.style.transitionDuration = ".2s";
        btnLogin.style.boxShadow = "rgba(0, 0, 0, 0.13) 0px 0px 10px";
    })
    btnLogin.addEventListener("mouseout", () => {
        btnLogin.style.transitionDuration = ".2s";
        btnLogin.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
    })

    btnLogin.addEventListener("click", () => {
        window.open("signin.html"); 
    })
}
   
function buttonSignUp(){
    var btnSignUp = document.getElementById("btn-signup");

    btnSignUp.addEventListener("mouseover", () => {
        btnSignUp.style.transitionDuration = ".2s";
        btnSignUp.style.boxShadow = "rgba(0, 0, 0, 0.13) 0px 0px 10px";
    })
    btnSignUp.addEventListener("mouseout", () => {
        btnSignUp.style.transitionDuration = ".2s";
        btnSignUp.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
    })

    btnSignUp.addEventListener("click", () => {
        window.open("signup.html"); 
    })
}

function darkMode(){
    var switchBtn = document.getElementById("switch");
    var page = document.getElementById("page");
    var menu = document.querySelector("#menu");
    var btnSignIn = document.getElementById("btn-login");
    var btnSignUp = document.getElementById("btn-signup");

    if(switchBtn.value == 1){
        localStorage.setItem('theme', 'dark');

        switchBtn.style.transitionDuration = ".5s";
        switchBtn.style.background = "#4bd865";

        page.style.transitionDuration = ".2s";
        page.style.backgroundColor = "rgba(37, 35, 35, 0.897)";
        page.style.color = "#f8f8ff";

        menu.style.transitionDuration = ".2s";
        menu.style.backgroundColor = "rgba(37, 35, 35, 0.897)";

        btnSignIn.style.backgroundColor = "#222";
        btnSignIn.style.color = "#f8f8ff";
    
        btnSignUp.style.backgroundColor = "#222";
        btnSignUp.style.color = "#f8f8ff";
    }
    else{
        localStorage.setItem('theme', 'light');

        switchBtn.style.transitionDuration = ".5s";
        switchBtn.style.background = "#e9e9ea";

        page.style.transitionDuration = ".2s";
        page.style.backgroundColor = "#f8f8ff";
        page.style.color = "rgba(37, 35, 35, 0.897)";

        menu.style.transitionDuration = ".2s";
        menu.style.backgroundColor = "#f8f8ff";
        
        btnSignIn.style.transitionDuration = ".2s";
        btnSignIn.style.backgroundColor = "#f8f8ff";
        btnSignIn.style.color = "#000";
    
        btnSignUp.style.transitionDuration = ".2s";
        btnSignUp.style.backgroundColor = "#f8f8ff";
        btnSignUp.style.color = "#000";
    }
}

function darkTheme(){
    var page = document.getElementById("page");
    var forms = document.querySelector(".form-cadastro");
    var textSignUpWith = document.querySelectorAll(".sign-up-with");

    if(localStorage.getItem('theme') == 'dark'){
        page.style.transitionDuration = ".2s";
        page.style.backgroundColor = "rgba(37, 35, 35, 0.897)";
        page.style.color = "#f8f8ff";
        
        forms.style.backgroundColor = "#222";
        forms.style.color = "#f8f8ff";

        textSignUpWith[0].style.color = "#f8f8ff";
        textSignUpWith[1].style.color = "#f8f8ff";
    }
    else{
        page.style.transitionDuration = ".2s";
        page.style.backgroundColor = "#f8f8ff";
        page.style.color = "rgba(37, 35, 35, 0.897)";
    }
}

function formValidation(){
    var email = document.querySelector("#email");
    var password = document.querySelector("#password");

    if(email.value.length < 8 || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        Swal.fire({
            title: "Email inv??lido!",
            icon: 'warning',
            text: "Preencha o campo com um email v??lido!",
            confirmButtonColor: "#8C1B2F"
        })

        email.focus();
    }
    else{
        if(password.value.length < 8 || password.value.length > 25){
            Swal.fire({
                title: "Senha inv??lida!",
                icon: 'warning',
                text: "Preencha o campo com uma senha v??lida!",
                confirmButtonColor: "#8C1B2F"
            })

            password.focus();
        }
        else{
            Swal.fire({
                title: "Bem vindo " + email.value + "!",
                icon: 'success',
                confirmButtonColor: "#8C1B2F"
            })
        }
    }
}

function formValidationSignUp(){
    var email = document.querySelector("#email");
    var password = document.querySelector("#password");
    var passwordRepeat = document.querySelector("#password-repeat");

    if(email.value.length < 8 || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        Swal.fire({
            title: "Email inv??lido!",
            icon: 'warning',
            text: "Preencha o campo com um email v??lido!",
            confirmButtonColor: "#8C1B2F"
        })

        email.focus();
    }
    else{
        if(password.value.length < 8 || password.value.length > 25){
            Swal.fire({
                title: "Senha inv??lida!",
                icon: 'warning',
                text: "Preencha o campo com uma senha v??lida!",
                confirmButtonColor: "#8C1B2F"
            })

            password.focus();
        }
        else{
            if(passwordRepeat.value != password.value){
                Swal.fire({
                    title: "Senha inv??lida!",
                    icon: 'error',
                    text: "O campo 'Repeat Password' n??o possui a mesma senha digitada em 'Password'!",
                    confirmButtonColor: "#8C1B2F"
                })
            }
            else{
                Swal.fire({
                    title: "Bem vindo, " + email.value,
                    icon: 'success',
                    confirmButtonColor: "#8C1B2F"
                })
            }
        }
    }
}

