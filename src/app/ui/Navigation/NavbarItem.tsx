import React, { FunctionComponent, memo, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useAppSelector } from "../../hooks/useAppDispatch";
import { cartSelector } from "../../../store/selectors";
import { Theme } from "@mui/material";
import { theme } from "../../constants/theme";

interface NavbarItemProps {
  label: string;
  path: string;
}
interface StyleProps {
  active: boolean;
  hovered: boolean;
}
const useStyles = makeStyles<Theme, StyleProps>(() => ({
  root: {
    display: "flex",
    position: "relative",
  },
  title: {
    fontFamily: "Rubik Dirt",
    color: ({ active }) => (active ? "gold" : "#FFF"),
    letterSpacing: "0.1rem",
    fontWeight: 400,
    transition: ".4s ease-in-out",
    "&:first-letter": {
      color: "#00B965",
    },
    "&:hover": {
      color: "gold",
    },
  },
  borderAbove: {
    marginTop: theme.spacing(0.2),
    width: ({active,hovered}) => active || hovered ? "100%" : 0,
    height: 3,
    borderRadius: "5px",
    background: "#00B965",
    transition: ".7s ease-in-out"
  },
  cartIcon: {
    width: 14,
    height: 14,
    borderRadius: "50%",
    background: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 10,
    position: "absolute",
    top: 0,
    left: 45,
  },
  cartQuantity: {
    textAlign: "center",
    transform: "translate(-4%, 5%)",
  },
}));

const NavbarItem: FunctionComponent<NavbarItemProps> = ({ label, path }) => {
  const { pathname } = useLocation();
  const [hovered, setHovered] = useState(false);
  const active = useMemo(() => pathname === path, [pathname]);
  const classes = useStyles({ active, hovered });
  const { products } = useAppSelector(cartSelector);
  const totalInCart = useMemo(() => products.length, [products]);

  return (
    <Box className={classes.root}>
      <Link to={path}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Typography className={classes.title}>{label}</Typography>
        <Box className={classes.borderAbove}/>
      </Link>
      {label === "Cart" && totalInCart ? (
        <Box className={classes.cartIcon}>
          <span className={classes.cartQuantity}>{totalInCart}</span>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default memo(NavbarItem);
