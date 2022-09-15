import React, { FunctionComponent, memo, useCallback } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, IconButton, Typography } from "@material-ui/core";
import { Add, Remove, RemoveShoppingCart } from "@material-ui/icons";
import { ProductItem } from "../../../shared/models/models";
import { theme } from "../../../app/constants/theme";
import { useAppDispatch } from "../../../app/hooks/useAppDispatch";
import { add, remove, removeFromCart } from "../../../store/ducks";
import { Theme, useMediaQuery } from "@mui/material";


interface CartItemProps {
  product: ProductItem;
}

type StyleProps = { matches: boolean };

const useStyles = makeStyles<Theme, StyleProps>(() => ({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    height: 104,
    margin: theme.spacing(0, "auto"),
  },
  root: {
    maxWidth: ({ matches }) => (matches ? 364 : 800),
    height: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(1, 1, 1, 1),
    background: theme.palette.background.paper,
  },
  imageWrapper: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    overflow: "hidden",
    marginRight: ({ matches }) => (matches ? theme.spacing(1.5) : theme.spacing(0)),
  },
  img: {
    display: "block",
    width: "110%",
    height: "100%",
    background: "#000",
    padding: theme.spacing(2, 1, 0, 0)
  },
  quantityBlock: {
    width: 55,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonsStack: {
    width: 20,
    height: 55,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  icon: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#8d8a8a",
    color: "#fff",
    "&:hover": {
      background: "#575656",
    },
  },
  title: {
    marginLeft: ({ matches }) => (matches ? theme.spacing(0) : theme.spacing(2)),
    width: ({ matches }) => (matches ? 85 : 120),
    overflow: "hidden",
    height: 90,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  removeCart: {
    margin: ({ matches }) => (matches ? theme.spacing("10px", 0, 0, "94%") : theme.spacing(0)),
  }
}));

const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const matches = useMediaQuery("(max-width:600px)");
  const classes = useStyles({ matches });

  const addQuantityHandler = useCallback(() => {
    dispatch(add(product));
  }, [dispatch]);
  const removeQuantityHandler = useCallback(() => {
    dispatch(remove(product));
  }, [dispatch]);

  const removeFromCartHandler = useCallback(() => {
    dispatch(removeFromCart(product));
  }, [dispatch]);

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.root}>
        <Box className={classes.imageWrapper}>
          <img
            src={product.imageUrl}
            alt={product.title}
            className={classes.img}
          />
        </Box>
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.title}
        >
          {product.title}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.title}
        >
         ${product.price}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.title}
        >
          {product.category}
        </Typography>
        <Box className={classes.quantityBlock}>
          {product.quantity}
          <div className={classes.buttonsStack}>
            <IconButton className={classes.icon} onClick={addQuantityHandler}>
              <Add />
            </IconButton>
            <IconButton
              className={classes.icon}
              onClick={removeQuantityHandler}
            >
              <Remove />
            </IconButton>
          </div>
        </Box>
      </Box>
      <IconButton className={classes.removeCart} onClick={removeFromCartHandler}>
        <RemoveShoppingCart />
      </IconButton>
    </Box>
  );
};

export default memo(CartItem);
