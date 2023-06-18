"use client";
import { TextField, Box, Button } from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setValues({ ...values, [name]: value });
  };
  const handleSubmit = async () => {
    const createAdmin = await fetch("/auth/api/create-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const result = await createAdmin.json();
    console.log(result)
  };
  return (
    <Box>
      <TextField
        name="username"
        label="username"
        onChange={handleChange}
        value={values.username}
      />
      <TextField
        name="password"
        label="password"
        onChange={handleChange}
        value={values.password}
      />
      <Button onClick={handleSubmit}>Create User</Button>
    </Box>
  );
}
