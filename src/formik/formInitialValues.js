import checkoutFormModel from "./checkoutFormModel";
const {
  formField: {
    sourceLocation,
    destination,
    carType,
    travellersCount,
    bidAmount,
    name,
    phoneNumber,
    remarks,
    isAmountNegiotable,
    whatsappCheck,
    isBidVerified,
  },
} = checkoutFormModel;

export default {
  [sourceLocation.name]: "",
  [destination.name]: "",
  [carType.name]: "",
  [travellersCount.name]: "",
  [bidAmount.name]: "",
  [phoneNumber.name]: "",
  [name.name]: "",
  [remarks.name]: "",
  [isAmountNegiotable.name]: false,
  [whatsappCheck.name]: false,
  [isBidVerified.name]: false,
};
