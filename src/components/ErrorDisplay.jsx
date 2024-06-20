import React from "react";
import { Typography } from "@mui/material";

const ErrorDisplay = ({ error }) => {
  return (
    <Typography variant="body1" style={{ color: "red" }}>
      {error}
      <br />
      Try another city
    </Typography>
  );
};

export default ErrorDisplay;
