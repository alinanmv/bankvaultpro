import {
  AppBar,
  Toolbar,
  Box,
  Container,
  useTheme,
  alpha,
  useScrollTrigger
} from "@mui/material";
import NavigationLogo from "@/shared/ui/Logo/NavLogo";
import NavigationButtons from "@/shared/ui/Button/NavButtons";
import AvatarNavigation from "@/shared/ui/Avatar/AvatarNav";
import { ThemeSwitcher } from "@/features/theme-switcher/ui/ThemeSwitcher";

export default function Navigation() {
 const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 8 });
  const theme = useTheme();
const baseBg = theme.palette.mode === "dark"
    ? alpha("#0A0A0A", 0.28)   // тёмный стеклянный
    : alpha("#FFFFFF", 0.32); 
  return (
    <AppBar       position="sticky"
        elevation={0}
        sx={{
          top: 0,
          backdropFilter: "saturate(140%) blur(12px)",
          WebkitBackdropFilter: "saturate(140%) blur(12px)", // Safari
          backgroundColor: scrolled ? scrolled : baseBg,
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.3)}`,
          boxShadow: scrolled
            ? `0 4px 24px ${alpha(theme.palette.common.black, 0.18)}`
            : "none",
          zIndex: theme.zIndex.appBar + 1, // перекрывает дропдауны/контент
        }}>
      <Container maxWidth={false}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between"}}>
          <Box  sx={{ display: "flex", gap: 8, alignItems:"center"}} >
     <NavigationLogo/>
     <NavigationButtons/>
</Box>
<Box sx={{display:"flex", alignItems:"center",gap:4}}>
<ThemeSwitcher sx={{width:"20px"}}/>
     <AvatarNavigation/>
     </Box>
        </Toolbar >
      </Container>
    </AppBar>
  );
}
