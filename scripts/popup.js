
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
const url = `https://api.openai.com/v1/engines/${MODEL_ID}/completions`;*/

/*//DOK Chwiya Bedal hadik DOMContentLoaded dirha Click lel button ta3 Sign in
document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      let currentTab = tabs[0];
      let currentUrl = currentTab.url;
      let knownEmails = /mail\.google\.com|outlook\.live\.com|mail\.yahoo\.com/;
      let status = document.getElementById('status');

      if (knownEmails.test(currentUrl)) {
        console.log('This is an email website.');
        let message = getEmailContent(); 
        console.log(message);
        status.textContent = message;
      } 
      else {
        status.textContent = 'This is not an email website.';
      }
    });
  });

  function getEmailContent() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {code: "document.querySelector('body').innerHTML"}, function(result) {
          /**
           * @type 
           */
          /*let contentText = result[0];
          
          const ihtml = document.getElementById('ihtml');
          ihtml.innerHTML = contentText;
          const g = document.getElementsByClassName('gs')[0].children[2].getElementsByClassName('ii')[0].innerText;
          console.log(g);
          ihtml.innerHTML = g;
          /*let prompt = 'give me only the text of the email:\n';
          prompt += contentText;*/
          //console.log(contentText);
          /*return g;
        });
    });
  }
  */