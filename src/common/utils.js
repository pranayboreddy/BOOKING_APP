export const formatRupee = (value) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const BannerHeadings = {
  1: "Place your Bid",
  2: "Place your Bid",
  3: "Verify OTP",
  4: "Summary & Submit Bid",
};

export const selectCarTypeValues = [
  { value: "", label: "None" },
  { value: "Hatch Back", label: "Hatch Back" },
  { value: "Sedan", label: "Sedan" },
  { value: "SUV", label: "SUV" },
];

export const OTPStyles = (isError) => {
  const styleObj = {
    borderWidth: "0 0 1px",
    width: "60px",
    height: "60px",
    fontSize: "45px",
    fontWeight: "800",
  };
  if (isError) {
    styleObj.borderColor = "#ef5350";
    styleObj.color = "#ef5350";
  }
  return styleObj;
};
