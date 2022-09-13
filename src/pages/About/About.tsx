import React from "react";
import Page from "../../shared/components/Page/Page";
import { Typography } from "@material-ui/core";

const About = () => {
  return (
    <Page pageTitle={"About"} centered={false}>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        adipisci, aut commodi consequatur consequuntur corporis culpa cum,
        dolores doloribus facere fuga ipsum itaque magni minima neque officiis,
        possimus suscipit ullam.
      </Typography>
    </Page>
  );
};

export default About;
