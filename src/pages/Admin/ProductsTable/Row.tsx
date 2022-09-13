import React, { FunctionComponent, memo, useCallback } from "react";
import { IconButton } from "@mui/material";
import { Remove, Update } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { ProductItem } from "../../../shared/models/models";
import { theme } from "../../../app/constants/theme";
import { useAppDispatch } from "../../../app/hooks/useAppDispatch";
import { fetchAllProducts } from "../../../store/thunks";

export interface RowProps {
  product: ProductItem;
  onDelete: (id: string) => void;
}

const useStyles = makeStyles(() => ({
  cell: {
    padding: theme.spacing(0.1, 2),
    background: "#FFF",
    border: "1px solid #ccc",
    color: "#494848",
    fontSize: 14,
    letterSpacing: "0.05rem",
  },
}));

const Row: FunctionComponent<RowProps> = ({ product, onDelete }) => {
  const dispatch = useAppDispatch()

  const onClickHandler = useCallback(() => {
    onDelete(product._id);
    dispatch(fetchAllProducts())
  }, [onDelete, product._id]);

  const classes = useStyles();
  return (
    <tr>
      <td className={classes.cell}>{product.title}</td>
      <td className={classes.cell}>{product.category}</td>
      <td className={classes.cell}>$ {product.price}</td>
      <td className={classes.cell}>
        <IconButton style={{ color: "red" }} onClick={onClickHandler}>
          <Remove />
        </IconButton>
      </td>
      <td className={classes.cell}>
        <Link to={`/admin/update_product/${product._id}`}>
        <IconButton style={{ color: "blue" }} >
          <Update />
        </IconButton>
        </Link>
      </td>
    </tr>
  );
};

export default memo(Row);
