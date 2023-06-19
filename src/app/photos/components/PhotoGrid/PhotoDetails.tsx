import { Box, Typography } from "@mui/material";

interface PhotoDetailsProps {
  name: string | null;
  type: string | null;
}

export default function PhotoDetails(props: PhotoDetailsProps) {
  return (
    <Box>
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        {props.name}
      </Typography>
      <Typography variant="body2" color="GrayText">
        {props.type}
      </Typography>
    </Box>
  );
}
