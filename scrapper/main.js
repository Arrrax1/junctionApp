/*const API_KEY = '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'; // Replace with your API key
const MODEL_ID = 'GPT-3';
const maxTokens = 50;
const url = `https://api.openai.com/v1/engines/${MODEL_ID}/completions`;*/

let sender_name="";

document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      let currentTab = tabs[0];
      let currentUrl = currentTab.url;
      let knownEmails = /mail\.google\.com|outlook\.live\.com|mail\.yahoo\.com/;
      let status = document.getElementById('status');
      let name = document.getElementById('sender_name');

      if (knownEmails.test(currentUrl)) {
        console.log('This is an email website.');
        let message = getEmailContent(); 
        console.log(message);
        status.textContent = message;
        name.textContent = sender_name;
        status.classList.remove("warning_msg");
      } 
      else {
        status.textContent = 'This is not an email website!';
        status.classList.add("warning_msg");
      }
    });
  });
  
  //get Sender Name
  function getEmailContent() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {code: "document.querySelector('body').innerHTML"}, function(result) {
          /**
           * @type 
           */
          let contentText = result[0];
          
          const ihtml = document.getElementById('ihtml');
          ihtml.innerHTML = contentText;
          const g = document.getElementsByClassName('gs')[document.getElementsByClassName('gs').length-1].children[2].getElementsByClassName('ii')[0].innerText;
          console.log(g);
          ihtml.innerHTML = g;
          /*let prompt = 'give me only the text of the email:\n';
          prompt += contentText;*/
          //console.log(contentText);
          sender_name=document.getElementsByClassName('gD')[document.getElementsByClassName('gD').length-1].innerText;
          return g;
        });
    });
  }