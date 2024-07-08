import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';



function Heading() {
  return <h1>This is an h1 heading</h1>
}

function App() {

  return (
    <div>
      This is the "First Component"
      <div><Heading /></div>
    </div>
  );
}

export default App;
