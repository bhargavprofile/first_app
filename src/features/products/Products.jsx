import React from "react";
import {
  useDeleteProductMutation,
  useGetProductsByNameQuery,
  useLazyGetProductsByNameQuery,
} from "../../services/products";
import { Outlet } from "react-router-dom";
// import axios from "axios";

const Products = () => {
  var { data } = useGetProductsByNameQuery();
  var [dfn] = useDeleteProductMutation();
  var [rfn] = useLazyGetProductsByNameQuery();

  // function delFun(id) {
  //   axios.delete(`http://localhost:4005/products/${id}`).then(() => {
  //     alert("deleted");
  //   }); // basic react deletion
  // }

  function delFun(id) {
    dfn(id).then(() => {
      rfn();
    });
  }

  return (
    <div style={{ padding: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ul style={{ paddingLeft: "30px" }}>
          <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
            Products
          </h1>
          {data &&
            data.map((p) => {
              return (
                <li>
                  {p.title}
                  &nbsp;&nbsp;
                  <button
                    onClick={() => {
                      delFun(p.id);
                    }}
                  >
                    Delete
                  </button>
                  {/* onClick={() => {
                    delFun(p.id);
                  }} */}
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
