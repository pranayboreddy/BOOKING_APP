const checkoutFormModel = {
  formId: "bidForm",
  formField: {
    sourceLocation: {
      name: "sourceLocation",
      label: "Source Location *",
      requiredErrorMsg: "Source Location is required",
    },
    destination: {
      name: "destination",
      label: "Destination *",
      requiredErrorMsg: "Destination is required",
    },
    carType: {
      name: "carType",
      label: "Car Type *",
      requiredErrorMsg: "Car Type is required",
    },
    travellersCount: {
      name: "travellersCount",
      label: "Number of Travellers",
    },
    bidAmount: {
      name: "bidAmount",
      label: "",
    },
    isAmountNegiotable: {
      name: "isAmountNegiotable",
      label: "Rate Negiotable",
    },
    isBidVerified: {
      name: "isBidVerified",
    },
    phoneNumber: {
      name: "phoneNumber",
      label: "Enter your 10 digits Mobile number *",
      requiredErrorMsg: "Phone number is required",
      invalidErrorMsg: "Maximum length allowed is 10",
    },
    whatsappCheck: {
      name: "whatsappcheck",
      label: "Get updates on whatsapp",
    },
    name: {
      name: "name",
      label: "Enter your Name *",
      requiredErrorMsg: "Name is required",
    },
    remarks: {
      name: "remarks",
      label: "Enter Remarks(optional)",
    },
  },
};

export default checkoutFormModel;
