import {
  Button,
  TextField,
  Typography,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import StackRowLayout from "@/src/app/components/StackRowLayout";
import Layout from "./Layout";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import React, { useState } from "react";

export default function ChangePassword() {
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const [visible, setVisibility] = useState(false);

  const handlePasswordVisibility = () => {
    setVisibility(!visible);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setPassword({ ...password, [name]: value });
  };

  const handleSave = () => {
    console.log(password);
  };

  return (
    <Layout>
      <StackRowLayout spacing={2}>
        <Typography variant="h6">Change Password</Typography>
        <Button
          onClick={handleSave}
          disableElevation
          size="small"
          variant="contained"
        >
          Save
        </Button>
      </StackRowLayout>
      <Box sx={{ mt: 2 }}>
        <TextField
          sx={{ mb: 1.5 }}
          name="currentPassword"
          onChange={handleChange}
          value={password.currentPassword}
          label="Current Password"
          type={visible ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handlePasswordVisibility}
                >
                  {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={{ mb: 1.5 }}
          name="newPassword"
          onChange={handleChange}
          value={password.newPassword}
          label="New Password"
          type={visible ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handlePasswordVisibility}
                >
                  {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Layout>
  );
}
