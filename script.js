const jokeEl= document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn")
const translateValue = document.getElementById("translateValue")

jokeBtn.addEventListener("click", generateJoke)
generateJoke()
async function generateJoke(){
    const config = {
        headers:{
            Accept : 'application/json'
        },

    }

const res = await fetch("https://icanhazdadjoke.com", config)
const data = await res.json()
jokeEl.innerText = data.joke
const jokeValue = data.joke

const response = await fetch(`https://api.mymemory.translated.net/get?q=${jokeValue}!&langpair=en-GB|tr-TR`)
const newData = await response.json()
translateValue.innerText = newData.responseData.translatedText
}