function textValue(){
    let text = document.getElementById("text");
    let value = text.value;
    confirm(`Thank you! Please confirm your comment:
    ${value}
    `)

    text.value = "";
}