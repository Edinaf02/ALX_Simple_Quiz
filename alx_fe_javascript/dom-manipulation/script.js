const quotes = [
    { text: \"The best way to predict the future is to invent it.\", category: \"Inspiration\" },
    { text: \"Life is what happens when you're busy making other plans.\", category: \"Life\" },
    { text: \"Get busy living or get busy dying.\", category: \"Life\" }
];

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.innerHTML = \`<p>\${quotes[randomIndex].text}</p><p><em>\${quotes[randomIndex].category}</em></p>\`;
}

document.getElementById('newQuote').addEventListener('click', showRandomQuote);

function addQuote() {
    const newQuoteText = document.getElementById('newQuoteText').value;
    const newQuoteCategory = document.getElementById('newQuoteCategory').value;

    if (newQuoteText && newQuoteCategory) {
        quotes.push({ text: newQuoteText, category: newQuoteCategory });
        document.getElementById('newQuoteText').value = '';
        document.getElementById('newQuoteCategory').value = '';
        alert('Quote added!');
    } else {
        alert('Please enter both quote and category.');
    }
}" > script.js
