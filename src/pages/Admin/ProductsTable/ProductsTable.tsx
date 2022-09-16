import React, { memo, useCallback } from "react";
import Row from "./Row";
import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { LinearProgress } from "@material-ui/core";
import { theme } from "../../../app/constants/theme";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/hooks/useAppDispatch";
import { useFetchAllProducts } from "../../../app/hooks/useFetchAllProducts";
import { deleteProduct } from "../../../store/thunks";
import { ProductItem } from "../../../shared/models/models";

type StyleProps = {matches: boolean};

const useStyles = makeStyles<Theme, StyleProps>(() => ({
  cell: {
    padding: theme.spacing(0.8, 1),
    background: "#dcdbdb",
    border: "1px solid #ccc",
    color: "#494848",
    fontSize: ({ matches }) => (matches ? 14 : 24),
    fontWeight: 300,
  },
}));

const ProductsTable = () => {
  useFetchAllProducts();
  const { products, isLoading } = useAppSelector(
    (state) => state.productsReducer
  );
  const matches = useMediaQuery("(max-width: 600px)");
  const classes = useStyles({ matches });
  const dispatch = useAppDispatch();
  const onDeleteHandler = useCallback(
    (id) => {
      dispatch(deleteProduct(id));
    },
    [dispatch]
  );

  return (
    <Box>
      <Typography variant="h6" align="center" mb={4} mt={2}>
        All products
      </Typography>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <table>
          <thead>
            <tr>
              <th className={classes.cell}>Title</th>
              <th className={classes.cell}>Category</th>
              <th className={classes.cell}>Price</th>
              <th className={classes.cell}>Delete</th>
              <th className={classes.cell}>Update</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: ProductItem) => (
              <Row
                product={product}
                key={product._id}
                onDelete={onDeleteHandler}
              />
            ))}
          </tbody>
        </table>
      )}
    </Box>
  );
};

export default memo(ProductsTable);
