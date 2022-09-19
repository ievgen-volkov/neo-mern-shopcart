import React, { useCallback } from "react";
import { Box, Button, useMediaQuery } from "@material-ui/core";
import { useAppDispatch } from "../../../../app/hooks/useAppDispatch";
import { category } from "../../../../store/ducks";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@mui/material";
import { theme } from "../../../../app/constants/theme";

type StyleProps = { matches: boolean };

const useStyles = makeStyles<Theme, StyleProps>(() => ({
  filters: {
    fontSize: ({ matches }) => (matches ? "15px" : "18px"),
    fontWeight: 400,
    color: theme.palette.warning.contrastText,
  },
}));

const FiltersBar = () => {
  const dispatch = useAppDispatch();
  const onCategoryChange = useCallback(
    (categoryName: string) => {
      dispatch(category(categoryName));
    },
    [dispatch]
  );

  const matches = useMediaQuery("(max-width: 600px)");
  const classes = useStyles({ matches });

  return (
    <Box
      sx={{ width: matches ? 328 : 400, margin: "0 auto 14px" }}
      role="presentation"
      display="flex"
      justifyContent="space-between"
      mb={2}
    >
      <Button
        className={classes.filters}
        onMouseEnter={() => onCategoryChange("")}
      >
        All
      </Button>
      <Button
        className={classes.filters}
        onMouseEnter={() => onCategoryChange("photo")}
      >
        Cameras
      </Button>
      <Button
        className={classes.filters}
        onMouseEnter={() => onCategoryChange("watches")}
      >
        Watches
      </Button>
      <Button
        className={classes.filters}
        onMouseEnter={() => onCategoryChange("phones")}
      >
        Phones
      </Button>
    </Box>
  );
};

export default FiltersBar;
