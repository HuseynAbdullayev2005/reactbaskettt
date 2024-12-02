import React, { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export function useBasket() {
  return useContext(BasketContext);
}

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState(() => {
    const localBasket = localStorage.getItem("basketitems");
    return localBasket ? JSON.parse(localBasket) : [];
  });

  const [whislist, setWhislist] = useState(() => {
    const localwhislist = localStorage.getItem("whislistitems");
    return localwhislist ? JSON.parse(localwhislist) : [];
  });

  const [Basketcount, setBasketcount] = useState(basket.length);

  function addBasket(product) {
    setBasket((basket) => {
      const localBasket = [...basket, product];
      localStorage.setItem("basketitems", JSON.stringify(localBasket));
      return localBasket;
    });
    setBasketcount((count) => count + 1);
  }

  function addWhislist(product) {
    setWhislist((whislist) => {
      const localwhislist = [...whislist, product];
      localStorage.setItem("whislistitems", JSON.stringify(localwhislist));
      return localwhislist;
    });
  }

  return (
    <BasketContext.Provider
      value={{ basket, whislist, addBasket, Basketcount, addWhislist }}
    >
      {children}
    </BasketContext.Provider>
  );
}
