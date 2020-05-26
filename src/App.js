import React, { useEffect, useState } from 'react';
import './App.css';
import { getPosters } from './services/API';

function App() {
  const [posters, setPosters] = useState(null);
  useEffect(() => {
    async function getData() {
      const result = await getPosters();
      setPosters(result);
    }
    getData();
  }, []);

  useEffect(() => {
    const { MathJax } = window;
    if (MathJax) {
      MathJax.typeset();
    }
  }, [posters]);

  return (
    <div className="App">
      {posters &&
        posters.map(posterTitle => (
          <p
            key={posterTitle}
            dangerouslySetInnerHTML={{
              __html: posterTitle,
            }}
          />
        ))}
    </div>
  );
}

export default App;
