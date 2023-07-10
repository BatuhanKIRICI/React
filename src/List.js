import React from "react";
import { hour } from "./Heading";
function List() {
  return (
    <div>
      <ul>
        <li>{hour}</li>
        <li>{hour * 2}</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default List;
