import React from "react";
import Page from "../../../shared/components/Page/Page";
import BackToHomeBtn from "../../../shared/components/BackToHomeBtn/BackToHomeBtn";


const EmptyCart = () => {
  return (
    <Page pageTitle="Your Cart is Empty" withoutBg  centered >
      <BackToHomeBtn title='back to Home'/>
    </Page>
  );
};

export default EmptyCart;
