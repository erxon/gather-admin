import { Paper } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Paper sx={{ p: 3, maxWidth: 350 }}>{children}</Paper>;
}
