
function textValue(){
    let text = document.getElementById("text");
    let value = text.value;
    alert(`Thank you! Please confirm your comments:
    ${value}
    `)
    text.value = "";
}