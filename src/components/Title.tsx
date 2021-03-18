import { Typography } from "@material-ui/core";
import { ReactNode } from "react";
import * as React from "react";

type Props = {
  children: ReactNode;
};

export function Title({ children }: Props): JSX.Element {
  return <Typography variant="h1">{children}</Typography>;
}

export default Title;
