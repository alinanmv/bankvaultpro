import * as React from "react";
import {
  Box,
  Paper,
  Typography,
  CircularProgress,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  type SxProps,
} from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ReplayIcon from "@mui/icons-material/Replay";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { formatAmount, formatDate } from "@/shared/lib/format";

// только последние 4 цифры
const last4Masked = (raw: unknown) => {
  const s = String(raw ?? "").replace(/\D/g, "");
  const last4 = s.slice(-4);
  return last4 ? `.... ${last4}` : "....";
};

export type TransactionStatus = "failed" | "completed" | "pending";

export type TransactionRow = {
  id: string;
  name: string;
  email: string;
  cardBrand: string;
  cardNumber: string;
  status: TransactionStatus;
  date: string; // ISO
  amountCents: number;
  currency: string;
};

export type TransactionTableProps = {
  rows: TransactionRow[];
  isLoading?: boolean;
  error?: string | null;
  sx?: SxProps;
  onRetry?: (row: TransactionRow) => void;
  onDelete?: (id: string) => void;
};

export default function TransactionTable({
  rows,
  isLoading = false,
  error = null,
  sx,
  onRetry,
  onDelete,
}: TransactionTableProps) {
  const [data, setData] = React.useState<TransactionRow[]>(rows);
  React.useEffect(() => setData(rows), [rows]);

  const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null);
  const [activeRow, setActiveRow] = React.useState<TransactionRow | null>(null);
  const openMenu = Boolean(menuAnchor);

  const handleMenuOpen = (
    e: React.MouseEvent<HTMLButtonElement>,
    row: TransactionRow,
  ) => {
    setActiveRow(row);
    setMenuAnchor(e.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuAnchor(null);
    setActiveRow(null);
  };

  const handleCopyId = async () => {
    if (!activeRow) return;
    try {
      await navigator.clipboard.writeText(activeRow.id);
    } finally {
      handleMenuClose();
    }
  };
  const handleRetry = () => {
    if (activeRow) onRetry?.(activeRow);
    handleMenuClose();
  };
  const handleDelete = () => {
    if (!activeRow) return;
    setData((prev) => prev.filter((r) => r.id !== activeRow.id));
    onDelete?.(activeRow.id);
    handleMenuClose();
  };

  const common = { flex: 1, minWidth: 160 } as const;

  const columns: GridColDef<TransactionRow>[] = [
    {
      field: "name",
      headerName: "Customer",
      ...common,
      renderCell: (p) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            paddingLeft: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600} sx={{}}>
            {p.row.name}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mt: 0.25 }}
          >
            {p.row.email}
          </Typography>
        </Box>
      ),
      sortable: true,
    },
    {
      field: "cardBrand",
      headerName: "Card",
      ...common,
      type: "singleSelect",
      valueOptions: ["Uzcard", "Humo", "Visa", "MasterCard", "Other"],
    },
    {
      field: "cardNumber",
      headerName: "Number",
      ...common,
      renderCell: (p) => last4Masked(p.row.cardNumber),
      sortable: false,
    },
    {
      field: "status",
      headerName: "Status",
      ...common,
      renderCell: (p) => {
        const colorStyles: Record<
          TransactionStatus,
          { bg: string; text: string }
        > = {
          failed: { bg: "error.main", text: "#fff" },
          completed: { bg: "#000", text: "#fff" },
          pending: { bg: "grey.300", text: "#000" },
        };
        const s = colorStyles[p.row.status];
        return (
          <Box
            component="span"
            sx={{
              px: 1,
              py: 0.5,
              borderRadius: 1,
              bgcolor: s.bg,
              color: s.text,
              fontSize: 12,
              fontWeight: 600,
              textTransform: "capitalize",
            }}
          >
            {p.row.status}
          </Box>
        );
      },
    },
    {
      field: "date",
      headerName: "Date",
      ...common,
      renderCell: (p) => formatDate(p.row.date),
    },
    {
      field: "amountCents",
      headerName: "Amount",
      ...common,
      type: "number",
      align: "right",
      headerAlign: "right",
      renderCell: (p) =>
        formatAmount(p.row.amountCents, p.row.currency || "USD"),
    },
    {
      field: "__actions",
      headerName: "",
      width: 72,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      align: "right",
      renderCell: (p) => (
        <IconButton
          size="small"
          onClick={(e) => handleMenuOpen(e, p.row)}
          aria-label="Row actions"
        >
          <MoreVertIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Paper
      variant="outlined"
      sx={[
        { height: "100vh", width: "100%", overflow: "hidden" },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {isLoading && (
        <Typography
          sx={{ p: 2, display: "flex", alignItems: "center", gap: 1 }}
        >
          <CircularProgress size={18} /> Loading transactions…
        </Typography>
      )}
      {error && (
        <Typography color="error" sx={{ p: 2 }}>
          {error}
        </Typography>
      )}

      <DataGrid
        rows={data}
        columns={columns}
        rowHeight={70}
        getRowId={(r) => r.id}
        disableRowSelectionOnClick
        pageSizeOptions={[10, 25, 50, 100]}
        initialState={{
          pagination: { paginationModel: { pageSize: 25, page: 0 } },
          sorting: { sortModel: [{ field: "date", sort: "desc" }] },
        }}
        sx={{
          border: 0,
          "& .MuiDataGrid-columnSeparator": { display: "none" },
          "& .MuiDataGrid-columnHeaders": { borderBottom: "none" },
        }}
      />

      <Menu
        anchorEl={menuAnchor}
        open={openMenu}
        onClose={handleMenuClose}
        elevation={2}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleCopyId}>
          <ListItemIcon>
            <ContentCopyIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Copy transaction id" />
        </MenuItem>
        <MenuItem onClick={handleRetry}>
          <ListItemIcon>
            <ReplayIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Retry transaction" />
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleDelete} sx={{ color: "error.main" }}>
          <ListItemIcon sx={{ color: "error.main" }}>
            <DeleteOutlineIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Delete" />
        </MenuItem>
      </Menu>
    </Paper>
  );
}
