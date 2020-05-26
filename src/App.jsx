import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState();

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div id="quote-box">
      <p id="text">random text</p>
      <p id="author">random author</p>
      <button id="new-quote">New Quote</button>
      <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank"></a>
      <a id="tumblr-quote"></a>
    </div>
  );
}

export default App;
