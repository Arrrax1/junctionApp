
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




if(navigator.onLine) {
  let f_body = document.getElementById('fake_body')
  setTimeout(() => {  f_body.classList.add('fake_body_opacity'); }, 3000);
  setTimeout(() => {  f_body.classList.add('fake_body_index'); }, 3000);
} else {
  document.getElementById('fake_body').innerHTML = '<h1 style="color:white">No internet :/</h1><h3 style="color:white">please check you connection!</h3>'
}







//HAITH

/*const API_KEY = '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'; // Replace with your API key
const MODEL_ID = 'GPT-3';
const maxTokens = 50;
const url = `https://api.openai.com/v1/engines/${MODEL_ID}/completions`;
*/
