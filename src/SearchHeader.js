import { useState } from "react";

function SearchHeader({ search }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    search(text);
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          borderRadius: "3px",
          border: "1px solid lightgray",
        }}
      >
        <label>Search for: </label>
        <input
          value={text}
          onChange={handleChange}
          style={{
            width: "25%",
            height: "25px",
            borderRadius: "3px",
            border: "2px solid gray",
            marginTop: "5px",
          }}
        />
        <button
          style={{
            width: "100px",
            height: "25px",
            borderRadius: "3px",
            border: "1px solid gray",
            marginTop: "5px",
            background: "blue",
            color: "white",
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchHeader;
