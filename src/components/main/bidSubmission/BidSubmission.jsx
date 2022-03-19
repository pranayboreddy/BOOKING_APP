import React from "react";
import { Divider } from "@mui/material";
import { BidDetailsData, JourneyDetailsData } from "../../shared";
import { CommonButton } from "../../formFields";

const BidSubmission = () => {
  return (
    <>
      <JourneyDetailsData />
      <Divider />
      <BidDetailsData />
      <Divider />
      <CommonButton sx={{ my: 4 }} type="submit">
        Submit Bid
      </CommonButton>
    </>
  );
};

export default BidSubmission;
