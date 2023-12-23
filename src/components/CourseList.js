import React from "react";
import { useSelector } from "react-redux";
import CourseItem from "./CourseItem";

function CourseList() {
  const { cartItems, quantity, total } = useSelector((store) => store.cart);
  return (
    <>
      {quantity < 1 ? (
        <section className="cart">
          <header>
            <h2>My Cart</h2>
            <h4>Empty</h4>
          </header>
        </section>
      ) : (
        <section className="cart">
          <header>
            <h2>My Cart</h2>
          </header>
          <div>
            {cartItems.map((item, index) => {
              return <CourseItem key={index} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>
                Total <span>{total} $</span>
              </h4>
            </div>
            <button className="cartCleanButton">Clean</button>
          </footer>
        </section>
      )}
    </>
  );
}

export default CourseList;
