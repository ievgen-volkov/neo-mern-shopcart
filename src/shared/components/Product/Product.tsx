import React, { FunctionComponent, memo, useCallback, useState } from "react";
import { ProductItem } from "../../models/models";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, Card, Theme, Typography } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { theme } from "../../../app/constants/theme";

interface ProductProps {
  product: ProductItem;
  onAddToCart: (product:ProductItem) => void;
  added: boolean;
}
type StyleProps = { isAdded:boolean;}
const useStyles = makeStyles<Theme,StyleProps>(() => ({
  root: {
    width: 310,
    height: 300,
    background: ({isAdded})=> isAdded ? "antiquewhite":theme.palette.background.paper,
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(0,"auto")
  },
  title: {
    fontSize: "18px",
    letterSpacing: "0.1rem",
    fontWeight: 300,
    color: theme.palette.primary.main,
  },
  imageWrapper: {
    marginTop: theme.spacing(1),
    width: 280,
    height: 200,
    overflow: "hidden",
    opacity: 0.98,
    borderRadius: 5,
    background:"#000",
    transition: "0.3s ease-in-out",
    "&:hover": {
      width: 282,
      opacity: 1,
    },
  },
  actionBlock: {
    marginTop: theme.spacing(1.5),
    width: "100%",
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const Product: FunctionComponent<ProductProps> = ({ product,onAddToCart,added }) => {

  const [isAdded, setIsAdded] = useState(added)
  const classes = useStyles({isAdded});

  const onAddToCartHandler = useCallback(()=>{
    onAddToCart(product)
    setIsAdded(true)
  },[product,onAddToCart])

  return (
    <Card className={classes.root} elevation={8}>
      <Typography variant="h6" className={classes.title}>
        {product.title}
      </Typography>
      <Box className={classes.imageWrapper}>
        <img src={product.imageUrl} alt={product.title} />
      </Box>
      <Box alignSelf="flex-start" mt={2}>
        price : ${product.price}
      </Box>
      <Box className={classes.actionBlock}>
        <Link to={`/product/${product._id}`}>
          <Button variant="contained" color="primary">
            show more
          </Button>
        </Link>
        <Button color="primary" onClick={onAddToCartHandler} disabled={isAdded}>
          <p style={{ marginRight: 4 }}>add to cart </p>
          <AddShoppingCart />
        </Button>
      </Box>
    </Card>
  );
};

export default memo(Product);
