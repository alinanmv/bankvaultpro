import { Chip } from "@mui/material";


export function StatusChip({ ok }: { ok: boolean }) {
return (
<Chip
size="small"
label={ok ? "Success" : "Failed"}
color={ok ? "success" : "error"}
variant={ok ? "outlined" : "filled"}
/>
);
}