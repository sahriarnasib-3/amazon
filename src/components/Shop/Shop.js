import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const [items, setItems] = useState([]);
  const addToCart = (product) => {
    const newItems = [...items, product];
    setItems(newItems);
  };
  return (
    <div className="main-div">
      <div className="product-container">
        {products.map((product) => (
          <Product
            addToCart={addToCart}
            key={product.id}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="summary">
        <Cart items={items}></Cart>
      </div>
    </div>
  );
};

export default Shop;
