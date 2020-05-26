import React from 'react';
import './App.css';

function App() {
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
