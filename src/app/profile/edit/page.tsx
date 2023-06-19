"use client";

import { user } from "../data";
import { Box, Typography } from "@mui/material";
import ChangePhoto from "../components/EditProfile/ChangePhoto";
import EditProfileDetails from "../components/EditProfile/EditProfileDetails";
import ChangePassword from "../components/EditProfile/ChangePassword";

export default function Page() {
  //Profile picture
  //First Name, Last Name
  //Contact number
  //Email
  //Change password

  return (
    <Box>
      <ChangePhoto publicId={user.photo} />
      <Box sx={{mt: 2}}>
        <EditProfileDetails />
      </Box>
      <Box sx={{mt: 2}}>
        <ChangePassword />
      </Box>
    </Box>
  );
}
