import { Paper, Button, Typography, Box } from "@mui/material";
import Layout from "./Layout";
import ProfileAvatar from "../ProfileCard/ProfileAvatar";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import StackRowLayout from "@/src/app/components/StackRowLayout";
import React, { useState } from "react";

export default function ChangePhoto(props: { publicId: string }) {
  const [imageFile, setImageFile] = useState<string | null>();
  console.log(imageFile);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    if (event.target.files[0].name === "") return;
    setImageFile(event.target.files[0].name);
  };

  return (
    <Layout>
      <StackRowLayout spacing={1}>
        <ProfileAvatar publicId={props.publicId} />
        <Box>
          {imageFile && <Typography color="grayText">{imageFile}</Typography>}
          <Button
            startIcon={<InsertPhotoIcon />}
            size="small"
            variant="contained"
            component="label"
          >
            select
            <input
              hidden
              onChange={handleChange}
              type="file"
              accept="image/jpeg, image/png"
            />
          </Button>
          {imageFile && (
            <Button sx={{ml: 1}} size="small" variant="contained">
              Save
            </Button>
          )}
        </Box>
      </StackRowLayout>
    </Layout>
  );
}
