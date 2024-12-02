import React from "react";
import { useBasket } from "../context/basketcontext";
import { useState } from "react";
function Basket() {
  const { basket } = useBasket();
   
  return (
    <div>
      <h1>Your Basket</h1>

      <div className="basket">
        {basket.map((x, i) => (
          <div key={i} className="basket_item">
            <img className="basket_item_image" src={x.image} alt={x.title} />
            <p>{x.title}</p>
            <p>{x.price}</p>
            <div className="basket_item_buttons">
              <button className="add">+</button>
              <p>1</p>
              <button className="dec">-</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Basket;
