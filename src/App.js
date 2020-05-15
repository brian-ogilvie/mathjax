import React from 'react';
import './App.css';
import data from './input.json';

const { text, text2, text3 } = data;

function parseTex(str) {
  return str.replace(/\$([^$]+)\$/g, (_, content) => {
    return '\\(' + content + '\\)';
  });
}

function App() {
  return (
    <div className="App">
      <p>{parseTex(text)}</p>
      <p>{parseTex(text2)}</p>
      <p>{parseTex(text3)}</p>
    </div>
  );
}

export default App;
