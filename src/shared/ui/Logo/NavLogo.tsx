import { Logo } from '@/shared/ui/Logo/Logo';
import { Box, Typography, useTheme } from '@mui/material';

export default function NavigationLogo() {
  const theme = useTheme();
  const textColor = theme.palette.mode === 'light'
    ? theme.palette.text.primary
    : theme.palette.grey[100];

  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
      <Logo width={"20px"} />
      <Typography
        variant="h6"
        noWrap
        sx={{
          color: textColor,
          textDecoration: "none",
          fontWeight: 700,
          letterSpacing: ".05rem",
        }}
      >
        BankVault
      </Typography>
    </Box>
  );
}
