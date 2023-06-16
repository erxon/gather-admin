'use client'
import { Box, Typography, Divider } from "@mui/material";


export default function Head() {
  return (
    <Box sx={{mb: 3}}>
      <Typography sx={{ mb: 2 }} variant="h5">
        Photos
      </Typography>
      <Divider />
    </Box>
  );
}
