import React from "react";
import { useNavigate } from "react-router-dom";

function Mission() {
  const navigateBack = useNavigate();

  return (
    <>
      <div>Mission</div>
      <button
        onClick={() => {
          navigateBack(-1); //navigateBack("/")
        }}
      >
        Back to Home Page
      </button>
    </>
  );
}

export default Mission;
