import { Select, MenuItem } from "@mui/material";
import { useThemeMode } from "@/app/providers/theme";

export default function ThemeSelect(props: any) {
  const { setting, setSetting } = useThemeMode();

  return (
    <Select
      size="small"
      value={setting}
      onChange={(e) => setSetting(e.target.value as any)}
      sx={{ minWidth: 140, ...props.sx }}
      // ✅ вот это главное — прокидываем ВСЕ пропсы (open, onClose, MenuProps, anchorEl, и т.д.)
      {...props}
    >
      <MenuItem value="light">Light</MenuItem>
      <MenuItem value="dark">Dark</MenuItem>
      <MenuItem value="system">System</MenuItem>
    </Select>
  );
}
