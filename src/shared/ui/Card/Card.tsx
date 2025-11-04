import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { type SxProps, useTheme } from "@mui/material/styles";

interface LoginCardProps {
  title?: string;
  description?: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  padding?: number | string;
  children?: React.ReactNode;
  icon?: React.ReactNode; 
  sx?: SxProps;
  titleSx?: SxProps;
}

export default function DefaultCard({
  title,
  description,
  width = 450,
  height = "auto",
  borderRadius = "12px",
  padding = 3,
  children,
  icon, // ← получили
  sx,
  titleSx
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
          alignItems: "flex-start",
          justifyContent: "flex-start",
          textAlign: "left",
          ...sx,
        }}
      >
        {(title || icon) && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2, // расстояние между иконкой и заголовком
              width: "100%",
            }}
          >
            {icon && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  svg: { width: 22, height: 22 }, // default размер svg
                }}
              >
                {icon}
              </Box>
            )}

            {title && (
              <Typography
                variant="h5"
                fontWeight={600}
                
                sx={{
                  fontFamily: "'Merriweather', 'Times New Roman', serif",
                    ...(titleSx ?? {})
                }}
              >
                {title}
              </Typography>
            )}
          </Box>
        )}

        {description && (
          <Typography color="text.secondary" sx={{ fontSize: "12px", mt:0 }}>
            {description}
          </Typography>
        )}

        {children}
      </Card>
    </Box>
  );
}
