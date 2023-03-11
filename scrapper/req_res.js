function copy_text() {
    let element = document.getElementById('copy').parentElement.parentElement.children[0].innerText;
    navigator.clipboard.writeText(element);
}

document.getElementById('copy').addEventListener('click', copy_text);

async function call_api() {
    const email = document.querySelector('#ihtml').innerText;
    const emailHash = window.btoa(encodeURIComponent(email));
    let query = document.getElementById('send_query').parentElement.parentElement.children[0].value;

    const session_id = localStorage.getItem(emailHash);
    const response = await tokenPostRequest('/assist/append', {
        message: query,
        session_id: session_id
    });

    if(response.success)
    {
        const messages = JSON.parse(localStorage.getItem(session_id));
        const content = response.data.message;

        messages.push(content);
        localStorage.setItem(session_id, JSON.stringify(messages));

        document.getElementById('copy').parentElement.parentElement.children[0].innerText=content;
    }
    //Fun
}

document.getElementById('send_query').addEventListener('click', call_api);


function show_side_panel() {
    document.getElementById('panel').classList.remove('side_panel_hidden');
    document.getElementById('background_panel').classList.remove('background_panel_hidden');
}
function hide_side_panel() {
    document.getElementById('panel').classList.add('side_panel_hidden');
    document.getElementById('background_panel').classList.add('background_panel_hidden');
}
document.getElementById('return').addEventListener('click', hide_side_panel);
document.getElementsByClassName('user_icon')[0].addEventListener('click', show_side_panel);