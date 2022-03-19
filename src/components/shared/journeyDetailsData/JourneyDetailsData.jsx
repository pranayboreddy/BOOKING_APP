import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { useFormikContext } from "formik";
import styles from "./JourneyDetailsData.module.scss";
import { FormContext } from "../../../App";

const JourneyDetailsData = () => {
  const { values: formValues } = useFormikContext();
  const { sourceLocation, destination, carType, travellersCount } = formValues;
  const { handleStep } = useContext(FormContext);
  return (
    <Box
      sx={{
        px: 3,
        py: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
      }}
    >
      <div>
        <Typography
          sx={{ fontSize: 14, textTransform: "uppercase" }}
          color="text.secondary"
        >
          Journey Details
        </Typography>
        <p className={styles.textStyling}>
          {sourceLocation} {"-"} {destination}
        </p>
        <p className={styles.textStyling}>
          {travellersCount ? travellersCount : "0"} Person(s), {carType}
        </p>
      </div>
      <Button
        startIcon={<ModeEditOutlinedIcon />}
        onClick={() => handleStep(1)}
      >
        Edit
      </Button>
    </Box>
  );
};

export default JourneyDetailsData;
