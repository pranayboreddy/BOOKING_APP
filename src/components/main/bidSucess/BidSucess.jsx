import React from "react";
import { Box, Typography } from "@mui/material";
import gif from "../../../assets/images/bid_confirmation.gif";

function BidSuccess() {
  return (
    <Box sx={{ textAlign: "center", py: 8 }}>
      <img src={gif} alt="_confirmation" style={{ width: "21rem" }} />
      <Typography variant="h3" color="success" gutterBottom>
        Thank you !
      </Typography>
      <Typography variant="h5" gutterBottom>
        We received your bid we will contact you soon
      </Typography>
    </Box>
  );
}

export default BidSuccess;
