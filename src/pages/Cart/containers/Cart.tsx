import React, { memo } from "react";
import EmptyCart from "../components/EmptyCart";
import { Grid, Typography } from "@material-ui/core";
import CartItem from "../components/CartItem";
import { useAppSelector } from "../../../app/hooks/useAppDispatch";
import { cartSelector } from "../../../store/selectors";
import Page from "../../../shared/components/Page/Page";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@mui/material";
import { theme } from "../../../app/constants/theme";

const useStyles = makeStyles(() => ({
  price: {
    fontWeight: 800,
    letterSpacing: "0.07rem",
    display: "block",
    margin: theme.spacing(2, "auto"),
    textAlign: "center",
    "& span": {
      color: "red",
    },
  },
}));

const Cart = () => {
  const { products, subTotal } = useAppSelector(cartSelector);
  const classes = useStyles();

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
        className={classes.price}
      >
        subTotal <span>${subTotal}</span>
      </Typography>
    </Page>
  );
};

export default memo(Cart);
