import * as React from "react"
import {
  Box,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { userSettings } from "@/shared/config/navigation";
export default function AvatarNavigation(){
      const theme = useTheme();
      const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    
      const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
      const isLight = theme.palette.mode === "light";
      const textColor = isLight ? theme.palette.text.primary : theme.palette.grey[100];
    return(
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
            )
}