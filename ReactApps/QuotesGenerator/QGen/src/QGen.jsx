import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import Button from './Button';

const QGen = () => {
    const [quote, setQuote] = useState(""); // State to hold the quote
    const apiKey = "5f8358aea8msh10e05dc03cbbd09p156becjsnb156a1e49100"; // Your actual API key

    const fetchApi = () => {
        axios.get("https://random-quote-generator2.p.rapidapi.com/randomQuote", {
            headers: {
                'x-rapidapi-host': 'random-quote-generator2.p.rapidapi.com',
                'x-rapidapi-key': apiKey,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log("API Response:", response.data); // Log the entire API response to the console
            // Check the structure before setting the quote
            if (response.data.content && response.data.author) {
                setQuote(`${response.data.content} — ${response.data.author}`); // Set quote state
            } else {
                console.error("Unexpected data structure:", response.data);
                setQuote("Quote not found"); // Set fallback message
            }
        })
        .catch(error => {
            console.error("Error fetching the quote:", error);
            setQuote("Error fetching quote."); // Set error message
        });
    };

    return (
        <div className='App'>
            <Button callApi={fetchApi} />
            <h2>{quote || "Click the button for a quote!"}</h2> {/* Show a fallback message */}
        </div>
    );
};

export default QGen;
