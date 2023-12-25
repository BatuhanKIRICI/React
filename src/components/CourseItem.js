import React from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../control/cartSlice";

function CourseItem({ id, title, price, img, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="cartItem">
      <img src={img} alt="" style={{ width: "750px", height: "500px" }} />
      <div className="cartInfo">
        <h4>{title}</h4>
        <h4 style={{ marginTop: "10px" }}>{price}TL</h4>
        <div>
          <button
            className="cartQuantityButton"
            onClick={() => dispatch(increase(id))}
          >
            <BsChevronUp />
          </button>
          <p style={{ marginRight: "8px" }}>{quantity}</p>
          <button
            className="cartQuantityButton"
            onClick={() => dispatch(decrease(id))}
          >
            <BsChevronDown />
          </button>
        </div>
        <button
          className="cartDeleteButton"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CourseItem;
