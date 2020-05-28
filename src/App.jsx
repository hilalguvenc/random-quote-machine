import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([
    {
      quote:
        "Life isn’t about getting and having, it’s about giving and being.",
      author: "Kevin Kruse",
    },
  ]);
  const [index, setIndex] = useState(0);

  const fetchQuotes = async () => {
    const response = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    const json = await response.json();
    setQuotes(json.quotes);
  };
  useEffect(() => {
    fetchQuotes();
  }, []);

  const getRandomIndex = () => {
    const index = Math.floor(Math.random() * 102);
    setIndex(index);
  };
  const quote = quotes[index];

  return (
    <div id="wrapper">
      {quote && (
        <div id="quote-box">
          <div id="quote-text">
            <p id="text">
              <i className="fas fa-quote-left"></i>
              {quote.quote}
            </p>
          </div>
          <div id="quote-author">
            <p id="author">-{quote.author}</p>
          </div>
        </div>
      )}
      <button id="new-quote" onClick={getRandomIndex}>
        New Quote
      </button>
      <div id="buttons">
        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a id="tumblr-quote" href="https://www.tumblr.com/">
          <i className="fab fa-tumblr-square"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
