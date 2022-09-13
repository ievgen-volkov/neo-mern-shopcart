import React, { useCallback, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  Menu,
  IconButton,
  Theme, Container
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NavbarMenu from "./NavbarMenu";
import NavbarItemMobile from "./NavbarItemMobile";
import { AppRoutes, NavItem, navItems } from "../../ApprRoutes/AppRoutes";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() =>({
  root : {
    background: "#3d2f09"
  },
  logo : {
    fontSize: "20px",
    fontWeight: 400,
    letterSpacing:"0.1rem",
    color:"#FFF",
    cursor: "pointer",
    transition:".15s ease-in-out",
    "&:hover" : {
      color:"gold"
    }
  }

}))


const Navbar = () => {
  const classes = useStyles()
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);

  const handleMenu = (event: any) => {

    setAnchor(event.currentTarget);
  };

  const ref = useRef(null);
  const onAnchorHandler = useCallback(() => {
    if (ref.current) {
      setAnchor(null);
    }
  }, [ref]);

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("xs")
  );
  return (
    <AppBar className={classes.root}>
      <Container>
      <Toolbar>
        <Link to={AppRoutes.Welcome}>
        <Typography className={classes.logo}>MERN shopping cart</Typography>
        </Link>
        {isMobile ? (
          <>
            <IconButton onClick={handleMenu}>
              <MenuIcon style={{ color: "#FFF" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchor}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
            >
              {navItems.map((item:NavItem) => (
                <NavbarItemMobile
                  ref={ref}
                  key={item.id}
                  label={item.label}
                  path={item.path}
                  icon={item.icon}
                  onClick={onAnchorHandler}
                />
              ))}
            </Menu>
          </>
        ) : (
          <NavbarMenu />
        )}
      </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
