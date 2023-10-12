import React, { useState } from "react";
import {
  useDeleteProductMutation,
  useGetProductsByNameQuery,
  useLazyGetProductsByNameQuery,
} from "../../services/products";
import { Outlet } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
// import axios from "axios";

const Products = () => {
  var { data } = useGetProductsByNameQuery();
  var [dfn] = useDeleteProductMutation();
  var [rfn] = useLazyGetProductsByNameQuery();

  const [isReadmore, setIsReadmore] = useState(true);
  function toggleReadmore(id) {
    setIsReadmore(!isReadmore);
  }

  // function delFun(id) {
  //   axios.delete(`http://localhost:4005/products/${id}`).then(() => {
  //     alert("deleted");
  //   }); // basic react deletion
  // }
  // const productLink = document.getElementById("products");
  // function product() {
  //   productLink.style.width = "100%";
  // }
  // product();

  function delFun(id) {
    dfn(id).then(() => {
      rfn();
    });
  }

  return (
    <div style={{ padding: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ul className="card-container">
          {data &&
            data.map((p) => {
              return (
                <li className="card card1">
                  <h1 className="title">{p.title}</h1>
                  <img className="img" src={p.image} alt="img" />
                  <br />
                  <div className="icons-container">
                    <i class="bi bi-pencil-square"></i>
                    <i
                      className="bi-trash"
                      onClick={() => {
                        delFun(p.id);
                      }}
                    ></i>
                    {/* onClick={() => {
                    delFun(p.id);
                  }} */}
                  </div>
                  <p>
                    {isReadmore ? p.description.slice(0, 50) : p.description}
                    <span
                      onClick={() => {
                        toggleReadmore(p.id);
                      }}
                      className="readmore"
                      id="readmore"
                      // onClick={() => {
                      //   readmore();
                      // }}
                    >
                      {isReadmore ? "...read more" : " show less"}
                    </span>
                  </p>
                </li>
              );
            })}
        </ul>

        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Products;
