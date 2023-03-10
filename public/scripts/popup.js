
function switch_tabs() {
    if(document.getElementById("signIn").checked == false ){
        document.getElementById("welcome_message").textContent = "Welcome Back!"
        document.getElementById("welcome_description").textContent = "Please enter your informations"
    }
    if(document.getElementById("signUp").checked == false ){
        document.getElementById("welcome_message").textContent = "Let's get you started!"
        document.getElementById("welcome_description").textContent = "Please enter your informations"
    }
}

document.getElementById('tab_switch').addEventListener('click', switch_tabs);
