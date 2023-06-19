'use client'
import { Box } from "@mui/material";
import Head from "./components/Head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Head />
      {children}
    </Box>
  );
}
