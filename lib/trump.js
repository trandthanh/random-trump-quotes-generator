const quote = document.getElementById("trump-quote");
console.log(quote);
const form = document.querySelector("form");
const query = document.getElementById("quote-query");


const generateQuote = (query) => {
  fetch(`https://api.funtranslations.com/translate/minion.json?text=${query}`)
    .then(response => response.json())
    .then((data) => {
      const translation = data.contents.translated;
      console.log(translation);
      quote.innerText = `${translation}`;
    });
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  generateQuote(query.value);
});
