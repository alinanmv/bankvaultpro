import * as React from "react"
import {
  AppBar,
  Toolbar,
  Box,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Container,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { userSettings } from "@/shared/config/navigation";
import NavigationLogo from "@/shared/ui/Logo/NavLogo";
import NavigationButtons from "@/shared/ui/Button/NavButtons";
export default function Navigation() {
  const theme = useTheme();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const isLight = theme.palette.mode === "light";
  const bgColor = isLight ? theme.palette.grey[100] : theme.palette.grey[900];
  const textColor = isLight ? theme.palette.text.primary : theme.palette.grey[100];

  return (
    <AppBar position="static" sx={{ background: bgColor, boxShadow: "none" }}>
      <Container maxWidth={false}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box  sx={{ display: "flex", gap: 8, alignItems:"center"}} >
     <NavigationLogo/>
     <NavigationButtons/>
</Box>
          {/* ---- USER AVATAR ---- */}
          <Box>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
            </IconButton>

            <Menu
              sx={{ mt: "45px" }}
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {userSettings.map((setting) => (
                <MenuItem
                  key={setting.id}
                  component={RouterLink}
                  to={setting.href}
                  onClick={handleCloseUserMenu}
                  sx={{
                    color: textColor,
                    "&:hover": {
                      background: isLight ? theme.palette.grey[200] : theme.palette.grey[800],
                    },
                  }}
                >
                  {setting.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
