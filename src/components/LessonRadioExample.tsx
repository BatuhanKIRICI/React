import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText,
  Button,
} from "@mui/material";

export const LessonRadioExample = () => {
  const [value, setValue] = useState("");
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === "man") {
      setHelperText("Yes man!");
      setError(false);
    } else if (value === "manOfCourse") {
      setHelperText("Yes, of course!");
      setError(false);
    } else {
      setHelperText("Please select!");
      setError(true);
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={error}>
        <FormLabel>Who are you?</FormLabel>
        <RadioGroup onChange={handleRadioChange}>
          <FormControlLabel value="man" label="man" control={<Radio />} />
          <FormControlLabel
            value="manOfCourse"
            label="manOfCourse"
            control={<Radio />}
          />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined">
          Send
        </Button>
      </FormControl>
    </form>
  );
};
