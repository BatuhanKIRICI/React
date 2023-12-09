import React from "react";
import { Button, ButtonGroup, Stack } from "@mui/material";

export const LessonButtonGroup = () => {
  return (
    <Stack direction="row">
      <ButtonGroup variant="contained">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>
      <ButtonGroup
        variant="outlined"
        orientation="vertical"
        size="small"
        color="error"
      >
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>
    </Stack>
  );
};
