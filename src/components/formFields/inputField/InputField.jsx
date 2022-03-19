import React from "react";
import { TextField } from "@mui/material";
import { at } from "lodash";
import { useField } from "formik";

const InputField = (props) => {
  const [field, meta] = useField(props);

  function renderHelperText() {
    const [touched, error] = at(meta, "touched", "error");
    if (touched && error) {
      return error;
    }
  }

  return (
    <TextField
      variant="outlined"
      InputProps={{ style: { fontWeight: 800 } }}
      InputLabelProps={{ shrink: true }}
      fullWidth
      error={renderHelperText() ? true : false}
      helperText={renderHelperText()}
      {...props}
      {...field}
    />
  );
};

export default InputField;
