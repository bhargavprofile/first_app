import React, { useState } from "react";
import { useGetProductsByNameQuery } from "../../services/products";

const Products = () => {
  const { isLoading, data } = useGetProductsByNameQuery();
  const [search, setSearch] = useState("");
  //   const [n, setN] = useState(data);

  console.log(data);

  //   var inputSearch = document.getElementById("inputSearch");
  //   n.filter((a, i) => {
  //     return a.startsWith(inputSearch.value);
  //   });

  //   searchF();
  //   console.log(search);
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          textTransform: "upperCase",
          color: "teal",
        }}
      >
        Products
      </h1>
      {isLoading ? (
        <h1 style={{ marginTop: "200px", textAlign: "center" }}>Loading...</h1>
      ) : null}
      {/* <input
        type="text"
        id="inputSearch"
        onKeyUp={(e) => {
          setSearch(e.target.value);
        }}
      /> */}

      <div className="container">
        {data &&
          data.map((product, i) => {
            return (
              <div className="product-card">
                <img src={product.image} alt="product-pic" width="150px" />
                <h1 className="product-name">{product.title.slice(0, 15)}</h1>
                <p className="descri">{product.description.slice(0, 100)}</p>
                <b className="price">
                  Price: <span style={{ color: "#000" }}> {product.price}</span>{" "}
                </b>{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b className="rate">
                  Rating:{" "}
                  <span style={{ color: "#000" }}>{product.rating.rate}</span>{" "}
                </b>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
