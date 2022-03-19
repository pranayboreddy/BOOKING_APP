import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { useFormikContext } from "formik";
import { CommonButton } from "../../formFields";
import OTPInput from "otp-input-react";
import { OTPStyles } from "../../../common/utils";
import { FormContext } from "../../../App";

const OtpVerification = () => {
  const [OTP, setOTP] = useState("");
  const [OTPError, setOTPError] = useState("");
  const { values: formValues, handleSubmit } = useFormikContext();
  const { phoneNumber } = formValues;
  const isOTPError = OTPError && OTP.length === 4;
  const { handleStep } = useContext(FormContext);

  const validateToSubmit = () => {
    if (OTP === "1234") {
      setOTPError("");
      handleSubmit();
    } else {
      setOTPError("Invalid OTP");
    }
  };

  useEffect(() => {
    OTP.length === 4 && validateToSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [OTP]);

  return (
    <Box sx={{ px: 3, py: 6 }}>
      <Typography>
        We've sent an OTP to your mobile. Please enter it below to submit your
        bid <strong> {phoneNumber} </strong>
        <Button
          startIcon={<ModeEditOutlinedIcon />}
          onClick={() => handleStep(2)}
        >
          Edit
        </Button>
      </Typography>
      <OTPInput
        value={OTP}
        onChange={setOTP}
        OTPLength={4}
        otpType="number"
        style={{
          margin: "25px 0",
        }}
        inputStyles={OTPStyles(isOTPError)}
      />
      {isOTPError && (
        <Typography size={"medium"} color="error">
          {OTPError}
        </Typography>
      )}
      <Typography align="center">
        <Link component="button" variant="body2" type="button">
          Resend OTP again
        </Link>
      </Typography>

      <CommonButton sx={{ my: 2 }} type="button" onClick={validateToSubmit}>
        Verify via OTP
      </CommonButton>
    </Box>
  );
};

export default OtpVerification;
