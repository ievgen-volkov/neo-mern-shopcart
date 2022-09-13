import React, { memo } from "react";
import { Box } from "@material-ui/core";
import NavbarItem from "./NavbarItem";
import { navItems } from "../../ApprRoutes/AppRoutes";

const NavbarMenu = () => {
  return (
    <Box
      sx={{
        display: "flex",
        marginLeft: "auto",
        width: 300,
        justifyContent: "space-between",
      }}
    >
      {navItems.map((item) => (
        <NavbarItem label={item.label} path={item.path} key={item.id} />
      ))}
    </Box>
  );
};

export default memo(NavbarMenu);
