import React, { FunctionComponent, memo, useCallback } from "react";
import { ListOptionsItem } from "../../models/models";
import { makeStyles } from "@material-ui/styles";
import { theme } from "@/app/constants/theme";
import { Box  } from "@material-ui/core";

interface ListItemPops {
  item: ListOptionsItem;
  onClick: (filterOption:string ) => void;
}


const useStyles = makeStyles(()=>({
  root: {
    width:100,
    height:30,
    fontSize: 16,
    color: "#7a7979",
    fontWeight: 300,
    borderTop: "1px solid #CCC",
    display:"flex",
    alignItems:"center",
    padding: theme.spacing(0,2),
    cursor:"pointer",
    transition:"0.15s ease-in-out",
    "&:hover": {
      color: theme.palette.primary.main,
    }
  }
}))



const ListItem:FunctionComponent<ListItemPops> = ({item,onClick}) => {

  const classes = useStyles()

  const onClickHandler = useCallback(()=>{
    onClick(item.filterOption)
  },[onClick,item.filterOption])

  return (
    <Box className={classes.root} onClick={onClickHandler}>
        {item.label}
    </Box>
  );
};

export default memo(ListItem);
