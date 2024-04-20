import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useAddToCart = () => {
  const [carts, setCarts] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    const url = `http://localhost:5000/addToCart?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);
  return [carts, setCarts];
};
export default useAddToCart;
