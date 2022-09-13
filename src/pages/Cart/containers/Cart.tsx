import React, { memo } from "react";
import EmptyCart from "../components/EmptyCart";
import { Grid, Typography } from "@material-ui/core";
import CartItem from "../components/CartItem";
import { useAppSelector } from "../../../app/hooks/useAppDispatch";
import { cartSelector } from "../../../store/selectors";
import Page from "../../../shared/components/Page/Page";

const Cart = () => {
  const { products, subTotal } = useAppSelector(cartSelector);

  return (
    <Page pageTitle="Your Cart" centered >
      {products.length ? (
        <Grid container spacing={1} direction="column-reverse">
          {products.map((product) => (
            <Grid item xs key={product._id}>
              <CartItem product={product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <EmptyCart />
      )}
      <Typography
        variant="subtitle1"
        color="textPrimary"
        style={{ marginTop: 20 }}
      >
        subTotal ${subTotal}
      </Typography>
    </Page>
  );
};

export default memo(Cart);
