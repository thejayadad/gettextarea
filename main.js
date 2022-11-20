
function textValue(){
    let text = document.getElementById("text");
    let value = text.value;
    confirm(`Thank you! Please confirm your comments:
    ${value}
    `)
    text.value = "";
}