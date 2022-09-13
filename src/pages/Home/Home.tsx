import React from "react";
import Page from "../../shared/components/Page/Page";
import ProductsGrid from "./containers/ProductsGrid";
import FiltersBar from "./containers/FiltersBar/FiltersBar";



const Home = () => {
  return (
    <Page >
       <FiltersBar/>
       <ProductsGrid/>
    </Page>
  );
};

export default Home;
