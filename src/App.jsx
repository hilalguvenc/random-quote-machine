import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
    const response = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    const json = await response.json();
    console.log(json.quotes[0]);
    setQuotes(json.quotes[0]);
  };
  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div id="quote-box">
      <p id="text">
        <i className="fas fa-quote-left"></i>
        {quotes.quote}
      </p>
      <p id="author">{quotes.author}</p>
      <button id="new-quote">New Quote</button>
      <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
        <i className="fab fa-twitter-square"></i>
      </a>
      <a id="tumblr-quote" href="https://www.tumblr.com/">
        <i className="fab fa-tumblr-square"></i>
      </a>
    </div>
  );
}

export default App;
