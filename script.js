//your code here
const textbox = document.createElement("textarea");
const heading = document.createElement("h3");
document.body.appendChild(heading);
document.body.appendChild(textbox);

textbox.addEventListener("input", countWords);

function countWords() {

    let words = textbox.value.split(" ").filter((str) => str !== '');
    heading.innerText = `${words.length}`;
    textbox.focus();

}

countWords(); ``