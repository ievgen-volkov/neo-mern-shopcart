import React, { FunctionComponent } from "react";
import {  ListOptionsItem } from "../../models/models";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import ListItem from "./ListItem";
import { theme } from "@/app/constants/theme";

interface ListProps {
  options: ListOptionsItem[];
  sortDirection?: "ASC" | "DESC";
  onClick: (filterOption:string ) => void;

}

const useStyles = makeStyles(() => ({
  root: {
    width: 102,
    height: "auto",
    border: "1px solid #CCC",
    background: theme.palette.background.paper,
  },
}));

const List: FunctionComponent<ListProps> = ({ options,onClick }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {options.map((item) => (
        <ListItem
          onClick={onClick}
          item={item}
          key={item.id}
        />
      ))}
    </Box>
  );
};

export default List;
