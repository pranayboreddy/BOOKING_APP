import React from "react";
import { Divider } from "@mui/material";
import {
  BidDetailsData,
  JourneyDetailsData,
  OtpVerification,
} from "../../shared";

const Verification = (props) => {
  return (
    <>
      <JourneyDetailsData />
      <Divider />
      <BidDetailsData />
      <Divider />
      <OtpVerification {...props} />
    </>
  );
};

export default Verification;
