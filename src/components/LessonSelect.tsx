import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

export const LessonSelect = () => {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(
      typeof e.target.value === "string"
        ? e.target.value.split(",")
        : e.target.value
    );
  };

  return (
    <Box width="250px">
      {/*  <TextField
        label="Select country"
        select
        fullWidth
        value={value}
        onChange={handleChange}
      >
        <MenuItem value="TR">Turkiye</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="RU">Russia</MenuItem>
      </TextField> */}
      <TextField
        SelectProps={{
          multiple: true,
        }}
        label="Select country"
        select
        fullWidth
        value={value}
        onChange={handleChange}
      >
        <MenuItem value="TR">Turkiye</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="RU">Russia</MenuItem>
      </TextField>
    </Box>
  );
};
