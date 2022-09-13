import React, { forwardRef, FunctionComponent, memo, ReactNode } from "react";
import { MenuItem, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../constants/theme";
interface Props {
  ref?: React.Ref<any>;
  label: string;
  path: string;
  icon?: ReactNode;
  onClick: () => void;
}

const useStyles = makeStyles(() =>({
  root: {
    width: 100,
    height: 20,
    padding: 0,
    color: theme.palette.primary.main,
    "&:hover" : {
      color: theme.palette.secondary.dark,
    }
  }
}))


const NavbarItemMobile: FunctionComponent<Props> = forwardRef(
  ({ label, path, onClick }, ref) => {
    const classes = useStyles()
    return (
      <MenuItem onClick={onClick}  >
        <Link to={path} style={{ display: "flex", alignItems: "center" }} ref={ref}>
          <Typography variant="inherit" className={classes.root} >{label}</Typography>
        </Link>
      </MenuItem>
    );
  }
);

export default memo(NavbarItemMobile);
