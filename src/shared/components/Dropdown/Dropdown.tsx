import React, { FunctionComponent, memo, useCallback, useEffect, useState } from "react";
import { ListOptionsItem } from "../../models/models";
import { Box, Collapse } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import List from "../List/List";
import { theme } from "@/app/constants/theme";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { category } from "@/store/ducks";

interface DropdownProps {
  options: ListOptionsItem[];
  sortDirection?: "ASC" | "DESC";
}

const useStyles = makeStyles(() => ({
  root: {
    width: 102,
    height: "auto",
    boxShadow:"0 0 3px #3d2f09",
    position:'fixed',
    top: 80,
    left:80,
    zIndex:10,
    borderRadius: 3
  },
  toggleBtn: {
    width: 102,
    height: 30,
    fontSize: 16,
    letterSpacing: "0.03rem",
    fontWeight: 300,
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 2),
    textTransform: "lowercase",
    background: theme.palette.background.paper,

  },
}));

const Dropdown: FunctionComponent<DropdownProps> = ({ options }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>(options[0].filterOption);
  useEffect(() =>{
    setSelected('all')
  },[])
  const onOpenHandler = useCallback(() => {
    setOpen(true);
  }, []);

  const dispatch = useAppDispatch()
  const onCategoryChange = useCallback((filterOption:string) =>{
    dispatch(category(filterOption))
  },[dispatch])

  return (
    <Box className={classes.root} onMouseLeave={()=>setOpen(false)} >
      <Box
        role="button"
        onMouseEnter={onOpenHandler}
        className={classes.toggleBtn}
      >
        {selected ? selected : "all" }
      </Box>
      <Collapse in={open}>
        <List
          options={options.filter((o) => o.filterOption !== selected)}
          onClick={(filterOption) => {
            onCategoryChange(filterOption)
            setSelected(filterOption)
            setOpen(false)
          }}
        />
      </Collapse>
    </Box>
  );
};

export default memo(Dropdown);
