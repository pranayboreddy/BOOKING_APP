import * as Yup from "yup";
import checkoutFormModel from "./checkoutFormModel";
const {
  formField: { sourceLocation, destination, carType, phoneNumber, name },
} = checkoutFormModel;

const validationSchema = [
  Yup.object().shape({
    [sourceLocation.name]: Yup.string().required(
      `${sourceLocation.requiredErrorMsg}`
    ),
    [destination.name]: Yup.string().required(
      `${destination.requiredErrorMsg}`
    ),
    [carType.name]: Yup.string()
      .nullable()
      .required(`${carType.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [name.name]: Yup.string().required(`${name.requiredErrorMsg}`),
    [phoneNumber.name]: Yup.string().required(
      `${phoneNumber.requiredErrorMsg}`
    ),
  }),
];

export default validationSchema;
