import React from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

export const LessonTextField = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="name" variant="outlined" />
        <TextField label="surname" variant="filled" />
        <TextField label="number" variant="standard" />
        <TextField label="name" variant="outlined" size="small" color="error" />
        <TextField
          label="name"
          variant="outlined"
          size="medium"
          color="error"
          helperText="Please login"
        />
        <TextField
          label="password"
          type="password"
          variant="outlined"
          size="medium"
          color="error"
          helperText="Please login"
        />
        <TextField
          disabled
          label="password"
          type="password"
          variant="outlined"
          size="medium"
          color="error"
          helperText="Please login"
        />
        <TextField
          InputProps={{ readOnly: true }}
          label="number"
          variant="outlined"
          size="medium"
          color="error"
          helperText="Please login"
        />
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">USD</InputAdornment>
            ),
          }}
          label="total"
          variant="outlined"
          size="medium"
          color="error"
          helperText="Please login"
        />
        <TextField
          onChange={(e) => setValue(e.target.value)}
          value={value}
          label="name"
          variant="outlined"
          size="medium"
          color="error"
          helperText={!value ? "Please login" : "Checking..."}
        />
      </Stack>
    </Stack>
  );
};
