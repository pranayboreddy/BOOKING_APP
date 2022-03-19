import React from "react";
import { Box, Typography } from "@mui/material";
import { formatRupee } from "../../../common/utils";
import { useFormikContext } from "formik";
import styles from "./BidDetails.module.scss";

const BidDetailsData = () => {
  const { values: formValues } = useFormikContext();
  const { phoneNumber, remarks, name, bidAmount, isAmountNegiotable } =
    formValues;
  return (
    <Box
      sx={{
        px: 3,
        py: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          sx={{ fontSize: 14, textTransform: "uppercase" }}
          color="text.secondary"
        >
          Bid Details
        </Typography>
        <p className={styles.textStyling}>{phoneNumber}</p>
        <p className={styles.textStyling}>{name}</p>
        <p className={styles.textStyling}>{remarks}</p>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ fontSize: "30px", fontWeight: 700 }}>
          {formatRupee(bidAmount)}
        </Typography>
        <Typography
          sx={{ fontSize: 14, textTransform: "uppercase", textAlign: "center" }}
          color="text.secondary"
        >
          {isAmountNegiotable ? "Can be Negotiable" : "Fixed Price"}
        </Typography>
      </Box>
    </Box>
  );
};

export default BidDetailsData;
