import * as React from "react";
import { Box } from "@mui/material";
import FilterBar, {
  type FilterValues,
} from "@/features/transaction-filters/ui/FilterBar";
import TransactionTable, {
  type TransactionRow,
} from "@/features/transactions/TransactionsTable";
import { fetchTransactionsMock } from "@/shared/api/transactions";

// утилиты фильтрации
function last4(s: string) {
  const d = String(s ?? "").replace(/\D/g, "");
  return d.slice(-4);
}

function inRange(iso: string, start: string, end: string) {
  if (!start && !end) return true;
  const t = new Date(iso).getTime();
  const s = start ? new Date(start + "T00:00:00").getTime() : -Infinity;
  const e = end ? new Date(end + "T23:59:59").getTime() : Infinity; // конец включительно
  return t >= s && t <= e;
}

// ↓ нормализуем строковые бренды: без пробелов, в нижнем регистре
function normBrand(s: string) {
  return String(s ?? "")
    .replace(/\s+/g, "")
    .toLowerCase();
}

function filterRows(rows: TransactionRow[], f: FilterValues) {
  return rows.filter((r) => {
    const byCard =
      !f.cardLast4.trim() || last4(r.cardNumber).includes(f.cardLast4.trim());

    const byType =
      !f.paymentType || normBrand(r.cardBrand) === normBrand(f.paymentType);

    const byDate = inRange(r.date, f.startDate, f.endDate);

    return byCard && byType && byDate;
  });
}

export default function FilteredTransactions() {
  // данные
  const [rows, setRows] = React.useState<TransactionRow[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchTransactionsMock(120).then((data) => {
      setRows(data);
      setLoading(false);
    });
  }, []);

  // состояние фильтров (редактируемые и применённые)
  const [isOpen, setIsOpen] = React.useState(false);

  const [filters, setFilters] = React.useState<FilterValues>({
    cardLast4: "",
    paymentType: "",
    startDate: "",
    endDate: "",
  });

  const [applied, setApplied] = React.useState<FilterValues>(filters);

  const handleChangeFilters = (next: Partial<FilterValues>) =>
    setFilters((prev) => ({ ...prev, ...next }));

  const handleApply = () => setApplied(filters);

  const handleClear = () => {
    const empty: FilterValues = {
      cardLast4: "",
      paymentType: "",
      startDate: "",
      endDate: "",
    };
    setFilters(empty);
    setApplied(empty);
  };

  const visibleRows = React.useMemo(
    () => filterRows(rows, applied),
    [rows, applied],
  );

  return (
    <Box>
      <FilterBar
        values={filters}
        onChange={handleChangeFilters}
        onApply={handleApply}
        onClear={handleClear}
        isOpen={isOpen}
        onToggleOpen={() => setIsOpen((p) => !p)}
      />

      <TransactionTable rows={visibleRows} isLoading={loading} sx={{ mt: 3 }} />
    </Box>
  );
}
