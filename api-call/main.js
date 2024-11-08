const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '517269cfa6msh5f8a30ea31e7a96p1af6acjsnc0d803256b8e',
        'x-rapidapi-host': 'quotes15.p.rapidapi.com'
    }
};

async function fetchQuote() {
    try {
        const response = await fetch(url, options);
        const result = await response.json(); 
    
        const quoteElement = document.getElementById('quote');
        const authorElement = document.getElementById('author');
        
        quoteElement.textContent = `"${result.content}"`;
        authorElement.textContent = `- ${result.originator.name}`;
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}

fetchQuote();
