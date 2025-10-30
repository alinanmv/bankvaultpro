import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { type SxProps, useTheme } from "@mui/material/styles";

interface LoginCardProps {
  title?: string;
  footer?: React.ReactNode;
  description?: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  padding?: number | string;
  children?: React.ReactNode;
  sx?: SxProps;
}


export default function DefaultCard({
  title,
  description,
  width = 450,
  height = "auto",
  borderRadius = "12px",
  padding = 3,
  children,
  sx,
}: LoginCardProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",         
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", 

      }}
    >
      <Card
        variant="outlined"
        sx={{
          width,
          height,
          p: padding,
          borderRadius,
          borderColor: theme.palette.divider,
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          display: "flex",
          flexDirection: "column", 
          paddingBottom:0,
          alignItems: "flex-start", 
          justifyContent: "flex-start",
          textAlign: "left",
          ...sx,
        }}
      >
        {title && (
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{
        
              fontFamily: "'Merriweather', 'Times New Roman', serif",
              width: "100%",         
            }}
          >
            {title}
          </Typography>
        )}

        {description && (
          <Typography  color="text.secondary" sx={{fontSize:"12px", }}>
            {description}
          </Typography>
        )}
        {children}
      </Card>
    </Box>
  );
}
