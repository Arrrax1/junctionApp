
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

window.onload = function() {
  const token = localStorage.getItem('token');
  if(!!token)
  {
    location.replace("scrapper/popup.html");
  }
}

async function signIn() {
    const email = document.getElementById("loginEmail").value
    const password = document.getElementById("loginPassword").value

    const response = await postRequest('/auth/login', { email, password });
    if(response.success){
      const token = response.authorization.token;
      localStorage.setItem('token', token);
      location.replace("scrapper/popup.html");
    } 
}

async function signUp() {
    const username = document.getElementById("signUpUsername").value
    const email = document.getElementById("signUpEmail").value
    const password = document.getElementById("signUpPassword").value
    const password_confirmation = document.getElementById("signUpPasswordConfirm").value

    const response = await postRequest('/auth/register', { username, email, password, password_confirmation });

    if(response.success){
      const token = response.authorization.token;
      localStorage.setItem('token', token);
      location.replace("scrapper/popup.html");
    } 
}

document.getElementById('signin_btn').addEventListener('click', signIn);
document.getElementById('signup_btn').addEventListener('click', signUp);










//HAITH

/*const API_KEY = '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'; // Replace with your API key
const MODEL_ID = 'GPT-3';
const maxTokens = 50;
const url = `https://api.openai.com/v1/engines/${MODEL_ID}/completions`;
*/
