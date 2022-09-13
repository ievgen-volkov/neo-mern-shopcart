import React, { FunctionComponent } from "react";
import { useProduct } from "../../../app/hooks/useProduct";
import Page from "../../../shared/components/Page/Page";
import AddProductForm from "../addProductForm/AddProductForm";





export  const UpdateProductPage:FunctionComponent = () => {
  const { product  } = useProduct()
  return (
    <Page pageTitle='Update Product' centered >
      <AddProductForm initialProduct={product!} update />
    </Page>
  );
};
