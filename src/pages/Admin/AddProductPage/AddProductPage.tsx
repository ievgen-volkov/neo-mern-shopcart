import React from "react";
import Page from "../../../shared/components/Page/Page";
import AddProductForm from "../addProductForm/AddProductForm";
import { initialProduct } from "../constants/constants";


const AddProductPage = () => {
  return (
    <Page pageTitle='Add Product' centered >
      <AddProductForm initialProduct={initialProduct}/>
    </Page>
  );
};

export default AddProductPage;
