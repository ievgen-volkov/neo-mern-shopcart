import React, { FunctionComponent, memo, useCallback } from "react";
import { IconButton, Theme, useMediaQuery } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SystemSecurityUpdateIcon from "@mui/icons-material/SystemSecurityUpdate";
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

type styleProps = { matches: boolean };

const useStyles = makeStyles<Theme, styleProps>(() => ({
  cell: {
    padding: ({ matches }) => (matches ? theme.spacing(0.5, 0.5) : theme.spacing(0.5, 1)),
    background: "#FFF",
    border: "1px solid #ccc",
    color: "#494848",
    fontSize: ({ matches }) => (matches ? 16 : 20),
    textAlign: "center",
    letterSpacing: "0.05rem",
  },
}));

const Row: FunctionComponent<RowProps> = ({ product, onDelete }) => {
  const dispatch = useAppDispatch();

  const onClickHandler = useCallback(() => {
    onDelete(product._id);
    dispatch(fetchAllProducts());
  }, [onDelete, product._id]);

  const matches = useMediaQuery("(max-width: 600px)")
  const classes = useStyles({ matches });
  return (
    <tr>
      <td className={classes.cell}>{product.title}</td>
      <td className={classes.cell}>{product.category}</td>
      <td className={classes.cell}>{product.price}</td>
      <td className={classes.cell}>
        <IconButton style={{ color: "red" }} onClick={onClickHandler}>
          <DeleteIcon />
        </IconButton>
      </td>
      <td className={classes.cell}>
        <Link to={`/admin/update_product/${product._id}`}>
          <IconButton style={{ color: "blue" }}>
            <SystemSecurityUpdateIcon />
          </IconButton>
        </Link>
      </td>
    </tr>
  );
};

export default memo(Row);
