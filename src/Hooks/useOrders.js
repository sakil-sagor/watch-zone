import { useEffect, useState } from "react";

const useOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(
    () => [
      fetch("https://fashion-zone-server-kappa.vercel.app/orders")
        .then((res) => res.json())
        .then((data) => setOrders(data)),
    ],
    []
  );
  return [orders, setOrders];
};
export default useOrders;
