import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://fashion-zone-server-kappa.vercel.app/allproducts")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setProducts(data);
          setLoading(false);
        }
      });
  }, []);
  return [products, setProducts, loading];
};
export default useProducts;
