import React, { FunctionComponent, memo, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useAppSelector } from "../../hooks/useAppDispatch";
import { cartSelector } from "../../../store/selectors";

interface NavbarItemProps {
  label: string;
  path: string;
}
interface StyleProps {
  active: boolean;
}
const useStyles = makeStyles<Pick<StyleProps, "active">, StyleProps>(() => ({
  root: {
    display: "flex",
    position: "relative",
  },
  title: {
    color: ({ active }) => (active ? "gold" : "#FFF"),
    letterSpacing: "0.07rem",
    fontWeight: 400,
    transition: ".15s ease-in-out",
    "&:hover": {
      color: "gold",
    },
  },
  cartIcon: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: "red",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    fontSize: 10,
    position:"absolute",
    top:0,
    left: 35
  },
}));

const NavbarItem: FunctionComponent<NavbarItemProps> = ({ label, path }) => {
  const { pathname } = useLocation();
  const active = useMemo(() => pathname === path, [pathname]);
  const classes = useStyles({ active });
  const { products } = useAppSelector(cartSelector);
  const totalInCart = useMemo(() => products.length, [products]);

  return (
    <Box className={classes.root}>
      <Link to={path}>
        <Typography className={classes.title}>{label}</Typography>
      </Link>
      {(label === "Cart") && totalInCart ? (
        <Box className={classes.cartIcon}>{totalInCart}</Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default memo(NavbarItem);
