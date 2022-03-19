import React from "react";
import { Box, Typography } from "@mui/material";
import { BannerHeadings } from "../../../common/utils";

const StepBanner = ({ step }) => {
  return (
    <Box
      sx={{ p: 6, background: "#0a163a", color: "#fff", textAlign: "center" }}
    >
      {step < 5 ? (
        <Typography variant="h4">
          {BannerHeadings[step]}({step}/4 step)
        </Typography>
      ) : (
        <Typography variant="h4">Bid Sucess :)</Typography>
      )}
    </Box>
  );
};

export default StepBanner;
