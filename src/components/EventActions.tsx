import React from "react";
import { useState } from "react";

function EventActions() {
  const [value, setValue] = useState("");

  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
      <input value={value} onChange={handleChange} />
    </div>
  );
}

export default EventActions;
