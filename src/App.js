import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';

function App() {

  function Header() {
    return <h1>Header Section</h1>
  }

  return (
    <div><Header /></div>
  );
}

export default App;
