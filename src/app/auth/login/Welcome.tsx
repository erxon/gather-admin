import { Box, Typography } from "@mui/material";

export default function Welcome() {
  return (
    <Box sx={{mb: 2}}>
      <Typography variant="h5">Welcome to Gather Admin Domain</Typography>
      <Typography variant="body1">
        Please enter your username and password
      </Typography>
    </Box>
  );
}
