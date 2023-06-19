"use client";

import { Box } from "@mui/material";
import Head from "./components/Head";
import PhotoGrid from "./components/PhotoGrid/PhotoGrid";
import Filter from "./components/Filter";
import React from "react";
export default function Page() {
  const [filter, setFilter] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setFilter(newValue);
  };

  return (
    <Box>
      <Head />
      <Filter filter={filter} handleChange={handleChange} />
      <PhotoGrid filter={filter} />
    </Box>
  );
}
