import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <>
        <div>Home</div>
        <button
          onClick={() => {
            navigate("/Mission");
          }}
        >
          Go to Mission
        </button>
      </>
    </div>
  );
}

export default Home;
