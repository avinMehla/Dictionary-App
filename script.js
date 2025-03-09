async function getMeaning() {
    
const word = document.getElementById("word").value
const result = document.getElementById("response")

if (!word) {
    result.innerHTML = "Please enter a word.";
    return;
}

try{

const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
const data = await response.json();
const meaning = data[0].meanings[0].definitions[0].definition;
result.innerHTML = ` : ${meaning}`;

}catch(error){
    result.innerHTML = `Error fetching data`;
}

}