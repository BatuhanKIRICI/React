import React from "react";
import { Typography } from "@mui/material";

export const LessonTypography = () => {
  return (
    <div>
      <Typography variant="body1">
        Body1 Hello Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Rem aliquam, quia ipsam error iste magni facere corporis quaerat non
        molestias consectetur quae. Autem voluptates nostrum necessitatibus
        nobis consectetur vitae odit!
      </Typography>
      <Typography variant="h1">Hello</Typography>
      <Typography variant="h1" component="h4">
        Hello
      </Typography>
      <Typography variant="h1" component="h4" align="right">
        Hello
      </Typography>
      <Typography variant="h1" component="h4" align="left">
        Hello
      </Typography>
    </div>
  );
};
