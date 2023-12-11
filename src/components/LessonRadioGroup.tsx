import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText,
} from "@mui/material";

export const LessonRadioGroup = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <FormControl>
      <FormLabel>{!value ? "Expected Salary" : value}</FormLabel>
      <RadioGroup
        row
        name="expected-salary"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          label="2000$"
          value="2000$"
          color="secondary"
          control={<Radio color="error" />}
        />
        <FormControlLabel
          label="3000$"
          value="3000$"
          color="secondary"
          control={<Radio color="error" />}
        />
        <FormControlLabel
          label="4000$"
          value="4000$"
          color="secondary"
          control={<Radio color="error" />}
        />
      </RadioGroup>
      <FormHelperText>Good luck!</FormHelperText>
    </FormControl>
  );
};
