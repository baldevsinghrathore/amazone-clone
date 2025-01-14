// src/components/ProductDetails.js
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../../context/data/MyContext";
import StarIcon from "@mui/icons-material/Star";
import "../../App.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { products, addToCart, accessToken } = useContext(MyContext);
  console.log(products);

  const singlePrduct = products.find(
    (product) => Number(product.id) === Number(id)
  );
  console.log(singlePrduct + "singleProduct");

  if (!singlePrduct) return <div>Loading...</div>;

  const handleCart = (item) => {
    if (accessToken) {
      alert(`new item added`)
      addToCart(item);
    } else {
      alert("Please signIn for add Product in cart...!!!");
      navigate("/SignIn");
    }
  };
  const handleBuy = (item) => {
    if (accessToken) {
      navigate("/Checkout");
    } else {
      alert("Please signIn for Buy Product...!!!");
      navigate("/SignIn");
    }
  };
  const handleExit = () => {
    navigate("/ProductList");
  };
  let Star = [];
  for (let i = 0; i < singlePrduct.rating; i++) {
    Star.push(<StarIcon key={i} style={{ color: "yellow" }} />);
  }
  console.log(singlePrduct.rating);


  return (
    <div className="productDetails">
      <div
        style={{
          margin: "10px",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="productImage">
          <img
            src={singlePrduct.thumbnail}
            alt={singlePrduct.title}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              borderRadius: "20px",
            }}
          />
        </div>
        <div className="productPreview">
          <p>
            <strong>ID:</strong> {singlePrduct.id}
          </p>
          <p>
            <strong>Name:</strong> {singlePrduct.title}
          </p>
          <p>
            <strong>Description:</strong> {singlePrduct.description}
          </p>
          <p>
            <strong>Category:</strong> {singlePrduct.category}
          </p>
          <p>
            <strong>Price:</strong> ${singlePrduct.price}
          </p>
          <p>{Star}</p>

          <div className="cartButton">
            <button onClick={() => handleCart(singlePrduct)}>
              Add to Cart
            </button>
            <button onClick={() => handleBuy(singlePrduct)}>Buy now</button>
          </div>
        </div>
      </div>
      <button onClick={() => handleExit()} className="exitformDetails">
        X
      </button>
    </div>
  );
};

export default ProductDetails;
