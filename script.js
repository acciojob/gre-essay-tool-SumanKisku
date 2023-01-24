//your code here
const textbox = document.getElementById("evaluatedText");
const h3 = document.getElementById("wordCount");

textbox.addEventListener("change", ()=> {
    countWords();
});

function countWords() {
    let words = textbox.value.split(" ").filter((str)=> str !== '');
    h3.innerText = `${words.length}`;
    document.body.appendChild(h3);
    document.body.appendChild(textbox);

}

countWords();