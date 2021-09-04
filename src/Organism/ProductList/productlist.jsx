import React, { useEffect, useState } from "react";
import ProductCard from "../../Molecule/ProductCard/productcard";
import productImage1 from "../../assets/product-image-1.png";
import "./productlist.css";

const ProductList = () => {
  const [data, setData] = useState();

  const getData = () => {
    fetch("productDetails.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {data &&
        data.length > 0 &&
        data.map((item) => <ProductCard cardDetails={item} />)}
    </div>
  );
};

export default ProductList;
