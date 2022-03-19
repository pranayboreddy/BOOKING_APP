import React from "react";
import { Box } from "@mui/material";
import logo from "../../../assets/images/vahak-logo.jpg";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <Box sx={{ display: "flex", p: 4 }}>
      <img src={logo} alt="logo" className={styles.logo} />
    </Box>
  );
};

export default Header;
