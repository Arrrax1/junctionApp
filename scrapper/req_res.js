function copy_text() {
    let element = document.getElementById('copy').parentElement.parentElement.children[0].innerText;
    navigator.clipboard.writeText(element);
}

document.getElementById('copy').addEventListener('click', copy_text);

function call_api() {
    let query = document.getElementById('send_query').parentElement.parentElement.children[0].value;
    console.log(query);
    //Fun
    document.getElementById('copy').parentElement.parentElement.children[0].innerText="MESSAGE FROM API";
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