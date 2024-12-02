import React from "react";
import { useBasket } from "../context/basketcontext";

function Whislist() {
  const { whislist } = useBasket();

  return (
    <div>
      <h1>Whislist</h1>

      <div className="whislist">
        {whislist.map((x, i) => (
          <div key={i} className="whislist_item">
            <img className="whislist_item_image" src={x.image} alt={x.title} />
            <p>{x.title}</p>
            <p>{x.price}</p>
            <p></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Whislist;
