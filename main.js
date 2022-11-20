


function textValue(){
    let text = document.getElementById("text");
    let value = text.value;
    alert(`Thank You! Please confirm your comments:
    ${value}`)
    text.value = "";
}