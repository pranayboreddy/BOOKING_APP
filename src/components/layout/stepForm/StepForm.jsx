import React from "react";
import { Container } from "@mui/material";
import {
  BidDetails,
  JourneyDetails,
  Verification,
  BidSubmission,
  BidSuccess,
} from "../../main";
import { checkoutFormModel } from "../../../formik";

const StepForm = ({ step }) => {
  const { formField } = checkoutFormModel;

  const renderSwitch = () => {
    switch (step) {
      case 1:
        return <JourneyDetails formField={formField} />;
      case 2:
        return <BidDetails formField={formField} />;
      case 3:
        return <Verification formField={formField} />;
      case 4:
        return <BidSubmission />;
      case 5:
        return <BidSuccess />;
      default:
        break;
    }
  };

  return <Container maxWidth="sm">{renderSwitch()}</Container>;
};

export default StepForm;
