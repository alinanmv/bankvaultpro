
import { Box, Paper, Typography, CircularProgress, type SxProps } from "@mui/material";
import {
  DataGrid,
  type GridColDef,
} from "@mui/x-data-grid";

import { maskCard, formatAmount, formatDate } from "@/shared/lib/format";


const columns: GridColDef[] = [
  { field: "name", headerName: "Name", flex: 1, minWidth: 140 },
  { field: "email", headerName: "Email", flex: 1.2, minWidth: 180 },
  {
    field: "cardBrand",
    headerName: "Card",
    width: 120,
    type: "singleSelect",
    valueOptions: ["Uzcard", "Humo", "Visa", "MasterCard", "Other"],
  },
  {
    field: "cardNumber",
    headerName: "Number",
    flex: 1,
    minWidth: 180,
    valueFormatter: (p) => maskCard(String()),
    sortable: false,
  },
  {
    field: "success",
    headerName: "Status",
    width: 120,
    type: "boolean",
    renderCell: (p) => (
      <Box
        component="span"
        sx={{
          px: 1,
          py: 0.5,
          borderRadius: 1,
          bgcolor: p.value ? "success.light" : "error.main",
          color: p.value ? "success.contrastText" : "#fff",
          fontSize: 12,
          fontWeight: 600,
        }}
      >
        {p.value ? "Success" : "Failed"}
      </Box>
    ),
  },
  {
    field: "date",
    headerName: "Date",
    flex: 1,
    minWidth: 180,
    valueFormatter: (p) => formatDate(String()),
  },
  {
    field: "amountCents",
    headerName: "Amount",
    type: "number",
    align: "right",
    headerAlign: "right",
    flex: 0.8,
    minWidth: 120,
    renderCell: (p) => formatAmount(Number(p.row.amountCents), p.row.currency || "USD"),
  },
];


export type TransactionRow = {
  id: string;
  name: string;
  email: string;
  cardBrand: string;
  cardNumber: string;
  success: boolean;
  date: string; // ISO
  amountCents: number;
  currency: string;
};

export type TransactionTableProps = {
  rows: TransactionRow[];
  isLoading?: boolean;
  error?: string | null;
  sx?: SxProps; 
};
export default function TransactionTable({
  rows,
  isLoading = false,
  error = null,
  sx
}: TransactionTableProps) {
  return (
    
    <Paper variant="outlined"      sx={[
        { height: "100vh", width: "100%", overflow: "hidden" },
      ]} >
      {isLoading && (
        <Typography sx={{ p: 2, display: "flex", alignItems: "center", gap: 1 }}>
          <CircularProgress size={18} /> Loading transactions…
        </Typography>
      )}
      {error && (
        <Typography color="error" sx={{ p: 2 }}>
          {error}
        </Typography>
      )}

      <DataGrid

        rows={rows}
        columns={columns}
        getRowId={(r) => r.id}
        disableRowSelectionOnClick
        pageSizeOptions={[10, 25, 50, 100]}
        initialState={{
          pagination: { paginationModel: { pageSize: 25, page: 0 } },
          sorting: { sortModel: [{ field: "date", sort: "desc" }] },
        }}
        sx={{ border: 0, "& .MuiDataGrid-toolbarContainer": { gap: 1 }}}
      />
    </Paper>
  );
}
