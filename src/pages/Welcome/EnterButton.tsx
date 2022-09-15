import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../app/ApprRoutes/AppRoutes";
import { useMediaQuery } from "@material-ui/core";
import { Theme } from "@mui/material";


interface EnterButtonProps {
  title: string;
}

type StyleProps = { matches: boolean };


const useStyles = makeStyles<Theme, StyleProps>(()=>({
  root: {
    width: 150,
    height: 40,
    position:"absolute",
    bottom:({ matches }) => (matches ? 120 : 600),
    right: ({ matches }) => (matches ? 110 : 230),
    borderRadius: "30px",
    background: "#3d2f09",
    boxShadow:" 0 0 5px #f0d27f",
    border:'none',
    fontWeight: 400,
    fontSize:"20px",
    letterSpacing:"0.09rem",
    color: "#f0d27f",
    cursor: "pointer",
    transition:"0.15s ease-in-out",
    "&:hover" : {
      background: "#f0d27f",
      color: "#3d2f09",
      boxShadow:" 0 0 5px #3d2f09",
    }
  }

}))



const EnterButton:FunctionComponent<EnterButtonProps> = ({title}) => {
  const matches = useMediaQuery("(max-width: 600px)")
  const classes = useStyles({ matches })
  return (
    <Link to={AppRoutes.Home}>
      <button type='button' className={classes.root}>
        {title}
      </button>
    </Link>
  );
};

export default EnterButton;
