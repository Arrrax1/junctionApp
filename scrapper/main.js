/*const API_KEY = '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'; // Replace with your API key
const MODEL_ID = 'GPT-3';
const maxTokens = 50;
const url = `https://api.openai.com/v1/engines/${MODEL_ID}/completions`;*/
var sender_name
document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
      let currentTab = tabs[0];
      let currentUrl = currentTab.url;
      let knownEmails = /mail\.google\.com\/mail\/u\/[0-9]\/#inbox\//;
      let status = document.getElementById('status');
      let email_wrapper = document.getElementById('email_content_wrapper');
      let name = document.getElementById('sender_name');

      if (knownEmails.test(currentUrl)) {
        console.log('This is an email website.');
        let message = await getEmailContent(); 
        console.log(message[0]);
        status.textContent = "Email you're replying to :";
        name.textContent = message[1];
        status.classList.remove("warning_msg");
        email_wrapper.classList.remove("hidden");
      } 
      else {
        status.textContent = 'Please Open an Email!';
        status.classList.add("warning_msg");
        email_wrapper.classList.add("hidden");
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
          
          const ihtml = document.getElementById('ihtml');
          ihtml.innerHTML = contentText;
          const g = []
          g[0]= document.getElementsByClassName('gs')[document.getElementsByClassName('gs').length-1].children[2].getElementsByClassName('ii')[0].innerText;
          console.log(g);
          g[1]= document.getElementsByClassName('gmail_attr')[0].innerText;
          ihtml.innerHTML = g;
          /*let prompt = 'give me only the text of the email:\n';
          prompt += contentText;*/
          //console.log(contentText);
          //document.getElementsByClassName('gD')[document.getElementsByClassName('gD').length-1].innerText;
          resolve(g);
        });
    });
    })
    
  }