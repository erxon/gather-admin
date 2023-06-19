"use client";
import { Box } from "@mui/material";
import { reports } from "../data";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 300 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "features",
    headerName: "Features",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
    editable: true,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 100,
    editable: true,
  },
  {
    field: "lastSeen",
    headerName: "Last Seen",
    width: 150,
    editable: true,
  },
  {
    field: "reporter",
    headerName: "Reporter",
    width: 150,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    editable: true,
  },
];

export default function Table() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={reports}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
