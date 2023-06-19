"use client";
import { Box } from "@mui/material";
import Form from "./Form/Form";
import Welcome from "./Welcome";

export default function Page() {
  return (
    <Box>
      <Welcome />
      <Form />
    </Box>
  );
}
