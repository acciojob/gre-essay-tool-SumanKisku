//your code here


function countWords() {
    const textbox = document.getElementById("evaluatedText");
    let h3 = document.getElementById("wordCount");
    let words = textbox.value.split(" ").filter((str) => str !== '');
    h3.innerText = `${words.length}`;
    document.body.appendChild(h3);
    document.body.appendChild(textbox);
    textbox.focus();

}

countWords();