/*const API_KEY = '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'; // Replace with your API key
const MODEL_ID = 'GPT-3';
const maxTokens = 50;
const url = `https://api.openai.com/v1/engines/${MODEL_ID}/completions`;*/

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#generate_btn').onclick = suggestEmail;
    chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
      let currentTab = tabs[0];
      let currentUrl = currentTab.url;
      let knownEmails = /mail\.google\.com\/mail\/u\/[0-9]\/#inbox\//;
      let status = document.getElementById('status');
      let email_wrapper = document.getElementById('email_content_wrapper');
      let name_div = document.getElementById('sender_name');
      let date_div = document.getElementsByClassName('email_date')[0];
      let image_icon = document.getElementById('user_icon');
      let search_bar = document.getElementById('search_bar');

      if (knownEmails.test(currentUrl)) {
        console.log('This is an email website.');
        

        let message = await getEmailContent(); 
        console.log(message);
        name_div.textContent = message[1].split("<")[0]+" :";
        date_div.textContent = message[2].split("(")[0];
        image_icon.src = message[4]
        //console.log(email_name);
        //name_div.textContent = email_name;
        
        status.classList.remove("warning_msg");
        status.classList.add("hidden");
        email_wrapper.classList.remove("hidden");
        search_bar.classList.add("footer");
        search_bar.classList.remove("hidden");
      } 
      else {
        status.classList.add("warning_msg");
        status.classList.remove("hidden");
        email_wrapper.classList.add("hidden");
        search_bar.classList.add("hidden");
        search_bar.classList.remove("footer");
      }
    });
  });
  
  
  function getEmailContent() {
    return new Promise((resolve, reject) => {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {code: "document.querySelector('body').innerHTML"}, function(result) {
          /**
           * @type 
           */
          let contentText = result[0];
          const resu = [contentText, "Username", "Date","Email","imageLink"];
          const ihtml = document.getElementById('ihtml');
          //ihtml.innerHTML = contentText;
          ihtml.innerHTML = resu[0];
          //resu[0] = document.getElementsByClassName('gs')[document.getElementsByClassName('gs').length-1].children[2].getElementsByClassName('ii')[0].innerText;
          resu[0] = document.querySelectorAll('div.ii>div>div:not(.gmail_quote)')[0].innerText;
          console.log(resu[0]);
          resu[1] = document.getElementsByClassName('gD')[document.getElementsByClassName('gD').length-1].parentNode.innerText;
          resu[2] = document.getElementsByClassName('gK')[document.getElementsByClassName('gK').length-1].innerText;
          resu[4] = document.getElementsByClassName('gs')[document.getElementsByClassName('gs').length-1].parentNode.children[0].children[0].lastChild.src;
          //resu[4] = document.getElementsByClassName('gs')[document.getElementsByClassName('gs').length-1].parentNode.childNodes[0].childNodes[0].childNodes[1].src;
          ihtml.innerHTML = resu[0];
          resolve(resu);
        });
    });
    })
  }


  async function suggestEmail() {
    const email = document.querySelector('#ihtml').innerText;
    const response = await tokenPostRequest('/assist/suggestEmail', { email });

    if(response.success)
    {
      document.querySelector('#response_message').innerText = response.data.trim();
    }
  }

  /*function getEmailDetails() {
    return new Promise((resolve, reject) => {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {code: "document.querySelector('body').innerHTML"}, function(result) {
          /**
           * @type 
           */
          /*let contentText = result[0];
          
          const ihtml = document.getElementById('ihtml');
          ihtml.innerHTML = contentText;
          const email_infos = document.getElementsByClassName('gD')[document.getElementsByClassName('gD').length-1].parentNode.innerText;
          console.log(email_infos);
          resolve(email_infos);
        });
    });
    })
  }*/