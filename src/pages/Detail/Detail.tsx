import React, { memo } from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Theme, useMediaQuery } from "@mui/material";
import { theme } from "../../app/constants/theme";
import { useProduct } from "../../app/hooks/useProduct";
import Page from "../../shared/components/Page/Page";
import BackToHomeBtn from "../../shared/components/BackToHomeBtn/BackToHomeBtn";

type StyleProps = { matches: boolean };

const useStyles = makeStyles<Theme, StyleProps>(() => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: ({ matches }) => (matches ? "column" : "row"),
    padding: theme.spacing(0.5),
    marginBottom: theme.spacing(3),
  },
  leftBlock: {
    width: ({ matches }) => (matches ? "100%" : "50%"),
    display: "flex",
    justifyContent: "center",
  },
  imageWrapper: {
    width: 400,
    height: 250,
    overflow: "hidden",
    border: "2px solid #FFF",
    background: theme.palette.primary.main,
  },
  image: {
    display: "block",
    width: "100%",
    objectFit:"contain"
  },
  text: {
    padding: theme.spacing(3),
    color: theme.palette.primary.contrastText,
  },
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

const Detail = () => {
  const { product } = useProduct();
  const matches = useMediaQuery("(max-width:600px)");
  const classes = useStyles({ matches });

  return (
    <Page pageTitle={product!.title} centered>
      <Box className={classes.root}>
        <Box className={classes.leftBlock}>
          <Box className={classes.imageWrapper}>
            <img
              src={product!.imageUrl}
              alt={product!.title}
              className={classes.image}
            />
          </Box>
        </Box>
        <Box>
          <Box className={classes.text}>
            <Typography variant="body1" color="textPrimary">
              {product!.desc}
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              className={classes.price}
            >
              price: <span>${product!.price}</span>
            </Typography>
          </Box>
        </Box>
      </Box>
      <BackToHomeBtn title="Back to Home " />
    </Page>
  );
};

export default memo(Detail);
