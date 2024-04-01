import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner/Spinner";
import ProductTitle from "../components/ProductTitle/ProductTitle";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
            {products && setProducts.length > 0
              ? products.map((item) => {
                  return <ProductTitle item={item}  key={item.id}/>;
                })
              : null}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
