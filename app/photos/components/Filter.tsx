import { Box, Tabs, Tab } from "@mui/material";
import React from "react";
import TabPanel from "./TabPanel";

interface FilterProps {
  filter: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export default function Filter(props: FilterProps) {
  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={props.filter}
          onChange={props.handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="All photos" />
          <Tab label="Reference photos" />
          <Tab label="Query photos" />
        </Tabs>
      </Box>
      <TabPanel value={props.filter} index={0}></TabPanel>
      <TabPanel value={props.filter} index={1}></TabPanel>
      <TabPanel value={props.filter} index={2}></TabPanel>
    </Box>
  );
}
