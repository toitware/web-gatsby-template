import { Typography } from "@material-ui/core";
import * as React from "react";

export const Title: React.FC = ({ children }) => {
  return <Typography variant="h1">{children}</Typography>;
};

export default Title;
