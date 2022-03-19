import React from "react";
import { Box, Grid } from "@mui/material";
import { selectCarTypeValues } from "../../../common/utils";
import { useFormikContext } from "formik";
import { CommonButton, InputField, SelectField } from "../../formFields";

const JourneyDetails = (props) => {
  const {
    formField: { sourceLocation, destination, carType, travellersCount },
  } = props;
  const { values: formValues } = useFormikContext();
  const { carType: carTypeValue } = formValues;

  function validateTravellersCount(value) {
    let error;
    if (carTypeValue === "SUV") {
      if (value > 6) {
        error = "Max allowed is 6";
      }
    } else {
      if (value > 4) {
        error = "Max allowed is 4";
      }
    }
    return error;
  }

  return (
    <Box sx={{ py: 6 }}>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <InputField name={sourceLocation.name} label={sourceLocation.label} />
        </Grid>
        <Grid item xs={6}>
          <InputField name={destination.name} label={destination.label} />
        </Grid>
        <Grid item xs={12}>
          <SelectField
            label={carType.label}
            name={carType.name}
            data={selectCarTypeValues}
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            type="number"
            label={travellersCount.label}
            name={travellersCount.name}
            validate={validateTravellersCount}
          />
        </Grid>
        <Grid item xs={12}>
          <CommonButton type="submit">Enter Bid Details</CommonButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JourneyDetails;
