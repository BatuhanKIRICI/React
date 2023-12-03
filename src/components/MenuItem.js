import React from "react";

export const MenuItem = ({ image, name, content, price }) => {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1 style={{ marginBottom: "10px" }}>{name}</h1>
      <h6 style={{ marginTop: "30px" }}>{content}</h6>
      <p style={{ marginTop: "30px" }}>
        <i style={{ color: "red" }}>{price} TL</i>
      </p>
    </div>
  );
};
