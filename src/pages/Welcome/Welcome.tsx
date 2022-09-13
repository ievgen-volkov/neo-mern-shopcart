import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import bg from '../../@assets/img/welcome_bg.jpg'
import EnterButton from "./EnterButton";
import { useFetchAllProducts } from "../../app/hooks/useFetchAllProducts";

const useStyles = makeStyles(()=>({
  root: {
    width: "100%",
    height:"100vh",
    overflow:"hidden",
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

}))



const Welcome = () => {
  useFetchAllProducts()
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <EnterButton title='Enter'/>
    </Box>
  );
};

export default Welcome;
