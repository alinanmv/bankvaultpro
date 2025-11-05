import { TextField, MenuItem, Stack, Button } from "@mui/material";
import { useTxFilters } from "@/features/transaction-filters/model/store";
import type { CardBrand } from "@/entities/transaction/model/types";

const brands: (CardBrand | "All")[] = [
  "All",
  "Uzcard",
  "Humo",
  "Visa",
  "MasterCard",
];

export function FilterBar() {
  const { q, brand, success, setQ, setBrand, setSuccess, reset } =
    useTxFilters();
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }}>
      <TextField
        size="small"
        label="Search name/email"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <TextField
        select
        size="small"
        label="Card"
        value={brand}
        onChange={(e) => setBrand(e.target.value as any)}
      >
        {brands.map((b) => (
          <MenuItem key={b} value={b}>
            {b}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        size="small"
        label="Status"
        value={success}
        onChange={(e) => setSuccess(e.target.value as any)}
      >
        {(["All", "Success", "Failed"] as const).map((s) => (
          <MenuItem key={s} value={s}>
            {s}
          </MenuItem>
        ))}
      </TextField>
      <Button onClick={reset} variant="outlined" size="small">
        Reset
      </Button>
    </Stack>
  );
}
