import React from "react";
import { FormGroup, Grid, Typography } from "@mui/material";
import { useFormikContext } from "formik";
import styles from "./contactDetail.module.scss";
import { CheckboxField, CommonButton, InputField } from "../../formFields";
import { checkoutFormModel } from "../../../formik";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ContactDetails = () => {
  const {
    formField: { phoneNumber, name, remarks, whatsappCheck },
  } = checkoutFormModel;
  const { values: formValues, ...rest } = useFormikContext();
  const { phoneNumber: phoneNumberValue } = formValues;

  return (
    <Grid container spacing={3} sx={{ mt: 2 }}>
      <Grid item xs={12}>
        <InputField
          name={phoneNumber.name}
          label={phoneNumber.label}
          onKeyDown={(e) => {
            e.keyCode > 57 && e.keyCode < 91 && e.preventDefault();
          }}
          inputProps={{ maxLength: 10 }}
        />
        {phoneNumberValue?.length === 10 && (
          <div className={styles.whatsappCheckbox}>
            <FormGroup>
              <CheckboxField
                name={whatsappCheck.name}
                label={
                  <Typography sx={{ display: "flex" }}>
                    Get updates on
                    <WhatsAppIcon
                      color="success"
                      sx={{ px: "5px" }}
                      fontSize="small"
                    />
                    <Typography component="span" className="success-color">
                      Whatsapp
                    </Typography>
                  </Typography>
                }
              />
            </FormGroup>
          </div>
        )}
      </Grid>
      <Grid item xs={12}>
        <InputField name={name.name} label={name.label} />
      </Grid>

      <Grid item xs={12}>
        <InputField name={remarks.name} label={remarks.label} />
      </Grid>
      <Grid item xs={12}>
        <CommonButton type="submit">Verify via OTP</CommonButton>
      </Grid>
    </Grid>
  );
};

export default ContactDetails;
