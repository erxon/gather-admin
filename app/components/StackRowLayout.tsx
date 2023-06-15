import { Stack } from "@mui/material";
import React from "react";

export default function StackRowLayout(props: {
  spacing: number;
  children: React.ReactNode;
}) {
  return (
    <Stack direction="row" spacing={props.spacing} alignItems="center">
      {props.children}
    </Stack>
  );
}
