import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import bgm from "../../@assets/img/welcome_to_our_shop_mobile.jpg";
import bg from "../../@assets/img/welcome_bg.jpg";
import EnterButton from "./EnterButton";
import { useFetchAllProducts } from "../../app/hooks/useFetchAllProducts";
import { Theme, useMediaQuery } from "@mui/material";

type StyleProps = { matches: boolean };

const useStyles = makeStyles<Theme, StyleProps>(() => ({
  root: {
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    background: ({ matches }) =>
      matches
        ? `url(${bgm}) center center/cover`
        : `url(${bg}) center center/cover`
  },
}));

const Welcome = () => {
  useFetchAllProducts();
  const matches = useMediaQuery("(max-width: 600px)");
  const classes = useStyles({ matches });
  return (
    <Box className={classes.root}>
      <EnterButton title="Enter" />
    </Box>
  );
};

export default Welcome;
