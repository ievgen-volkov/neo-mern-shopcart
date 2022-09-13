import React, { useCallback } from "react";
import { Box, Button } from "@material-ui/core";
import { useAppDispatch } from "../../../../app/hooks/useAppDispatch";
import { category } from "../../../../store/ducks";


const FiltersBar = () => {
 const dispatch = useAppDispatch()
 const onCategoryChange = useCallback((categoryName:string) =>{
   dispatch(category(categoryName))
 },[dispatch])


  return (
    <Box sx={{ width: 340}} role="presentation" display='flex' justifyContent='space-between' mb={2}>
      <Button onMouseEnter={()=> onCategoryChange("")}>All</Button>
      <Button onMouseEnter={()=> onCategoryChange("photo")}>Cameras</Button>
      <Button onMouseEnter={()=> onCategoryChange("watches")}>Watches</Button>
      <Button onMouseEnter={()=> onCategoryChange("phones")}>Phones</Button>
    </Box>
  );
};

export default FiltersBar;
