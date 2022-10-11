import React from "react";
import { Box, IconButton, Toolbar } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import NavMenu from "./NavbarMenu";
import TelegramIcon from "@mui/icons-material/Telegram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useLocation } from "react-router-dom";
import { Theme, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    zIndex: 1000,
    background: "#3d2f09",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  linkcontainer: {
    cursor: "pointer",
    margin: "0 auto",
  },
  linktelegram: {
    color: "#1C93E3",
    "&:hover": {
      color: "#00B965",
    },
  },
  linkmail: {
    color: "#FBBC04",
    "&:hover": {
      color: "#00B965",
    },
  },
  linklinkedin: {
    color: "#0A66C2",
    "&:hover": {
      color: "#00B965",
    },
  },
  toolbar: {
    width: 600,
    padding: 0,
    margin: "0 auto",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("xs")
  );
  return (
    <>
      {pathname !== "/" && (
        <Box className={classes.root}>
          <Toolbar className={classes.toolbar}>
            {!isMobile && <NavMenu />}
            <Box className={classes.linkcontainer}>
              <IconButton
                target="_blank"
                href="https://telegram.me/NEO_Odessa"
              >
                <TelegramIcon className={classes.linktelegram} />
              </IconButton>
              <IconButton
                target="_blank"
                href="mailto:neoodessa86@gmail.com"
              >
                <MailOutlineIcon className={classes.linkmail} />
              </IconButton>
              <IconButton
                target="_blank"
                href="https://www.linkedin.com/in/ievgen-volkov-32b6341ab/"
              >
                <LinkedInIcon className={classes.linklinkedin} />
              </IconButton>
            </Box>
          </Toolbar>
        </Box>
      )}
    </>
  );
};

export default Footer;
