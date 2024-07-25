import "./App.css";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const formInputRef = useRef(null);

  const handleFocus = () => {
    formInputRef.current.focus();
  };

  return (
    <>
      <h1>Using useRef to access underlying DOM</h1>
      <input ref={formInputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}
