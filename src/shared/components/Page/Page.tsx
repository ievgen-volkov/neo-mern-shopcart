import React, { FunctionComponent } from "react";
import { Box, Container, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import bg from "../../../@assets/img/bg_brown.jpg";

interface PageProps {
  children?: JSX.Element | JSX.Element[];
  pageTitle?: string;
  centered?: boolean;
  background?: boolean;
  rowDirection?: boolean;
  withoutBg?: boolean;
}
interface StyleProps {
  centered?: boolean;
  rowDirection?: boolean;
  withoutBg?: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {
    minHeight: "100vh",
    maxWidth: "1600px",
    display: "flex",
    flexDirection: ({ rowDirection }) => (rowDirection ? "row" : "column"),
    alignItems: ({ centered }) => (centered ? "center" : "flex-start"),
    background: ({ withoutBg }) =>
      withoutBg ? "transparent" : `url(${bg}) center center/cover`,
  },
  titleBlock: {
    margin: "0 auto",
    padding: theme.spacing(2),
    fontSize: 24,
    letterSpacing: ".1rem",
    fontWeight: 600,
  },
}));

const Page: FunctionComponent<PageProps> = ({
  children,
  pageTitle,
  centered,
  rowDirection,
  withoutBg,
}) => {
  const stylePops = {
    centered,
    rowDirection,
    withoutBg,
  };
  const classes = useStyles(stylePops);

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Box width={"100%"} height={"80px"}/>
      {pageTitle && <Box className={classes.titleBlock}>{pageTitle}</Box>}
      {children}
      <Box width={"100%"} height={"51px"}/>
    </Container>
  );
};

export default Page;
