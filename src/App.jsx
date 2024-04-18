import Axios from "axios";
import React, { useState } from 'react';

const App = () => {

  const [fact , setFact] = useState(null);

  const fetchData = () => { 
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setFact(res.data.fact);
      
    })
  }
  const clear = () => {
    setFact(null);
  }
  return (
    <div>
      <h1>This is a cat fact website! Welcome to the website</h1>
      <button onClick={() => fetchData()}>Generate Cat Fact</button>
      <h2>{fact}</h2>
      <button onClick={() => clear()}>Clear</button>
  
    </div>
  )
}

export default App
