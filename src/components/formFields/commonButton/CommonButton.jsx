import React from "react";
import { Button } from "@mui/material";

const CommonButton = (props) => {
  return (
    <Button
      fullWidth
      variant="contained"
      size="large"
      style={{ textTransform: "none" }}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default CommonButton;
