import React from "react";
import BackToHomeBtn from "../../../shared/components/BackToHomeBtn/BackToHomeBtn";
import { Box } from "@mui/material";
import { Container, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    fontWeight: 800,
    letterSpacing: "0.07rem",
    fontSize: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(3),
    textAlign: "center",
  },
}));

const EmptyCart = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xs">
      <Box width={"100%"} height={"120px"} className={classes.root}>
        Your Cart is Empty
      </Box>
      <BackToHomeBtn title="Back to Home" />
    </Container>
  );
};

export default EmptyCart;
