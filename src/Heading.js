import React from "react";

const hour = new Date().getHours();

let header = "";
if (hour < 12) {
  header = "Good Morning";
} else if (hour >= 12 && hour < 18) {
  header = "Good Afternoon";
} else {
  header = "Good Evening";
}

let design = {
  color: "black",
};

if (hour < 12) {
  design.color = "red";
} else if (hour >= 12 && hour < 18) {
  design.color = "green";
} else {
  design.color = "blue";
}

function Heading() {
  return (
    <div>
      <h1 style={design}>{header}</h1>
    </div>
  );
}

export { Heading };
export { hour };
