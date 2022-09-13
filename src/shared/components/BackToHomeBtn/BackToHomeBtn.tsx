import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { ArrowLeft } from "@material-ui/icons";
import { AppRoutes } from "../../../app/ApprRoutes/AppRoutes";
import { theme } from "../../../app/constants/theme";


interface BackToHomeBtnProps {
  title: string;
}


const useStyles = makeStyles(()=>({
  root: {
    width: 175,
    height: 40,
    display:"flex",
    alignItems:"center",
    margin: theme.spacing(0,'auto'),
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



const BackToHomeBtn:FunctionComponent<BackToHomeBtnProps> = ({title}) => {
  const classes = useStyles()
  return (
    <Link to={AppRoutes.Home}>
      <button type='button' className={classes.root}>
        <ArrowLeft/>
        {title}
      </button>
    </Link>
  );
};

export default BackToHomeBtn;
