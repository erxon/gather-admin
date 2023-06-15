import { Stack, Typography, Chip, Box } from "@mui/material";
import StackRowLayout from "@/app/components/StackRowLayout";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

export default function ProfileDetails(props: {
  firstName: string;
  lastName: string;
  type: string;
  username: string;
  email: string;
  contactNumber: string;
}) {
  return (
    <div>
      <StackRowLayout spacing={0.75}>
        <Typography variant="h6">
          {props.firstName} {props.lastName}
        </Typography>
        <Chip size="small" label={props.type} color="primary" />
      </StackRowLayout>
      <Typography variant="subtitle1" color="grayText">
        {props.username}
      </Typography>
      <Box sx={{mt: 1}}>
        <StackRowLayout spacing={0.5}>
          <CallIcon color="disabled" />
          <Typography variant="body1" color="grayText">
            {props.contactNumber}
          </Typography>
        </StackRowLayout>
        <StackRowLayout spacing={0.5}>
          <EmailIcon color="disabled" />
          <Typography variant="body1" color="grayText">
            {props.email}
          </Typography>
        </StackRowLayout>
      </Box>
    </div>
  );
}
