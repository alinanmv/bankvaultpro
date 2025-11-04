import React from "react";
import SettingSlider from "@/shared/ui/Lines/SettingSlider";
import SettingRow from "@/shared/ui/Lines/SettingRow";
import { Box, type SxProps } from "@mui/material";
interface LogoutDurationProps{
    sx: SxProps;
}
export default function LogoutDuration(sx:LogoutDurationProps){
    const [opacity, setOpacity] = React.useState(60);
    return(
<>
<Box sx={{borderBottom:"1px solid #eeeeee", display:"flex", flexDirection:"column", justifyContent:"space-between",width:"100%", gap:3, paddingBottom:"20px"}}>
      <SettingRow
            title="Auto-logout"
            description="Automatically log out after a period of inactivity."
            defaultChecked />
            <SettingSlider
                title={`Inactive duration: ${opacity} minutes`}
                value={opacity}
                onChange={setOpacity}
                min={0}
                max={120}
                step={5}
                marks={[{ value: 0 }]} />
                </Box>
                </>
    );
}