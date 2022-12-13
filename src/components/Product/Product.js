import React from "react";
import "./Product.css";
const Product = (props) => {
  const { addToCart, product } = props;
  const { name, id, seller, ratings, img, price } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-details">
        <p>{name}</p>
        <p>price: ${price}</p>
        <p>
          <small>seller: {seller}</small>
        </p>
        <p>
          <small>rating: {ratings}</small>
        </p>
      </div>
      <button onClick={() => addToCart(product)} className="btn-cart">
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
