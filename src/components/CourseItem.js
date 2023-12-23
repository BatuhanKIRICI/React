import React from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

function CourseItem({ id, title, price, img, quantity }) {
  return (
    <div className="cartItem">
      <img src={img} alt="" style={{ width: "750px", height: "500px" }} />
      <div className="cartInfo">
        <h4>{title}</h4>
        <h4 style={{ marginTop: "10px" }}>{price}TL</h4>
        <div>
          <button className="cartQuantityButton">
            <BsChevronUp />
          </button>
          <p style={{ marginRight: "8px" }}>{quantity}</p>
          <button className="cartQuantityButton">
            <BsChevronDown />
          </button>
        </div>
        <button className="cartDeleteButton">Delete</button>
      </div>
    </div>
  );
}

export default CourseItem;
