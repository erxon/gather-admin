"use client";

import { user } from "./data";
import { Typography, Box, Divider } from "@mui/material";
import ProfileCard from "./components/ProfileCard/ProfileCard";

export default function Page() {
  return (
    <Box>
      <ProfileCard
        photo={user.photo}
        username={user.username}
        firstName={user.firstName}
        lastName={user.lastName}
        type={user.type}
        contactNumber={user.contactNumber}
        email={user.email}
      />
    </Box>
  );
}
