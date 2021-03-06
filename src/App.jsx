import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
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
  const [currentColor, setCurrentColor] = useState(0);
  const [colors, setColors] = useState([
    "rgb(231, 76, 60)",
    "rgb(22, 160, 133)",
    "rgb(155, 89, 182)",
    "rgb(243, 156, 18)",
    "rgb(44, 62, 80)",
    "rgb(71, 46, 50)",
    "rgb(115, 168, 87)",
    "rgb(251, 105, 100)",
    "rgb(189, 187, 153)",
  ]);
  const [isVisible, setIsVisible] = useState(false);

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
    getColor();
    setIsVisible(!isVisible);
  };
  const quote = quotes[index];

  const getColor = () =>
    setCurrentColor(Math.floor(Math.random() * colors.length));
  console.log(currentColor);
  return (
    <div id="fullpage" style={{ backgroundColor: colors[currentColor] }}>
      <div id="wrapper">
        {quote && (
          <div id="quote-box" style={{ color: colors[currentColor] }}>
            <CSSTransition in={isVisible} timeout={500} classNames="sample">
              <div>
                <p id="text">
                  <i className="fas fa-quote-left"></i>
                  {quote.quote}
                </p>
                <p id="author">-{quote.author}</p>
              </div>
            </CSSTransition>
          </div>
        )}
        <button
          id="new-quote"
          onClick={getRandomIndex}
          style={{ backgroundColor: colors[currentColor] }}
        >
          New Quote
        </button>
        <div id="buttons">
          <a
            id="tweet-quote"
            href="https://twitter.com/home"
            target="_blank"
            style={{ color: colors[currentColor] }}
          >
            <i className="fab fa-twitter-square"></i>
          </a>
          <a
            id="tumblr-quote"
            href="https://www.tumblr.com/"
            target="_blank"
            style={{ color: colors[currentColor] }}
          >
            <i className="fab fa-tumblr-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
