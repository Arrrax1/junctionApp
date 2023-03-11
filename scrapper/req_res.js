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