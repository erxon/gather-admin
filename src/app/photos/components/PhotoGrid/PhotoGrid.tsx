import { Box, Grid, Paper, Typography } from "@mui/material";
import { photos } from "../../data";
import PhotoCard from "./PhotoCard";
import { useEffect, useState } from "react";

interface PhotoGridProps {
  filter: number;
}

export default function PhotoGrid(props: PhotoGridProps) {
  let filteredPhotos = [...photos]
  if (props.filter === 1){
    filteredPhotos = filteredPhotos.filter((photo) => {
        return photo.type === 'reference'
    })
  } else if (props.filter === 2){
    filteredPhotos = filteredPhotos.filter((photo) => {
        return photo.type === 'query'
    })
  }
  
  return (
    <Box>
      <Grid container spacing={2}>
        {filteredPhotos.map((photo) => {
          return (
            <Grid item xs={12} md={3} sm={4} key={photo.id}>
              <PhotoCard
                id={photo.id}
                name={photo.name}
                photo={photo.publicId}
                reportId={photo.reportId}
                type={photo.type}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
