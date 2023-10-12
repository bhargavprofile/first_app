import React from "react";
import { useFormik } from "formik";
import {
  useAddProductMutation,
  useLazyGetProductsByNameQuery,
} from "../../services/products";

function AddProdItems() {
  var [rfn] = useLazyGetProductsByNameQuery();
  var [addfn] = useAddProductMutation();

  var addproductForm = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      image: "",
    },
    onSubmit: (values) => {
      addfn(values).then(() => {
        alert("added Successfully");
        rfn();
      });
    },
  });

  return (
    <div className="addproducts-page">
      <h1>Add products</h1>
      <form onSubmit={addproductForm.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={addproductForm.handleChange}
          onBlur={addproductForm.handleBlur}
        />
        <br />
        <input
          type="text"
          name="price"
          placeholder="price"
          onChange={addproductForm.handleChange}
          onBlur={addproductForm.handleBlur}
        />
        <br />
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={addproductForm.handleChange}
          onBlur={addproductForm.handleBlur}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="image url"
          onChange={addproductForm.handleChange}
          onBlur={addproductForm.handleBlur}
        />
        <br />
        <button className="add-btn" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProdItems;
