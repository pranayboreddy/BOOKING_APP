import React from "react";
import { Box, Typography } from "@mui/material";
import { CheckboxField, CommonButton } from "../../formFields";
import { formatRupee } from "../../../common/utils";
import { Field, useFormikContext } from "formik";
import { checkoutFormModel } from "../../../formik";
import { ContactDetailsData, JourneyDetailsData } from "../../shared";
import styles from "./bidDetails.module.scss";

const BidDetails = () => {
  const {
    formField: { isAmountNegiotable, bidAmount },
  } = checkoutFormModel;
  const { values: formValues, setFieldValue } = useFormikContext();
  const { bidAmount: bidAmountValue, isBidVerified: isBidVerifiedStatus } =
    formValues;

  return (
    <>
      <JourneyDetailsData />
      <Box
        sx={{
          px: 3,
          py: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ mb: 8, display: "flex", height: "45px", fontSize: "45px" }}>
          {!isBidVerifiedStatus ? (
            <>
              <span className={styles.currencyIcon}>&#8377;</span>
              <Field
                type="number"
                name={bidAmount.name}
                className={styles.currencyInput}
                placeholder="0"
              />
            </>
          ) : (
            <Typography sx={{ fontSize: "45px", fontWeight: 800 }}>
              {formatRupee(bidAmountValue)}
            </Typography>
          )}
        </Box>
        <CheckboxField
          name={isAmountNegiotable.name}
          label={isAmountNegiotable.label}
        />
        {!isBidVerifiedStatus ? (
          <CommonButton
            disabled={!bidAmountValue}
            type="button"
            onClick={() => setFieldValue("isBidVerified", !isBidVerifiedStatus)}
            sx={{ my: 2 }}
          >
            Next
          </CommonButton>
        ) : (
          <ContactDetailsData />
        )}
      </Box>
    </>
  );
};

export default BidDetails;
