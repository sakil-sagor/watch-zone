import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import OrderNow from "../OrderNow/OrderNow";

const AddToCartOrder = () => {
  const [cartsOrder, setCartsOrder] = useState({});

  const { addToCartId } = useParams();

  useEffect(() => {
    const url = `https://fashion-zone-server-kappa.vercel.app/addToCart/${addToCartId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCartsOrder(data));
  }, []);

  const quantity = {
    ...cartsOrder,
  };
  return (
    <div className="py-24">
      <div className="container full-width-all mx-auto px-2">
        <OrderNow
          key={cartsOrder._id}
          product={cartsOrder}
          orders={quantity}
        ></OrderNow>
      </div>
    </div>
  );
};

export default AddToCartOrder;
