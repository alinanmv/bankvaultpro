import { Input } from "@mui/material";
import type { InputProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";
interface TextInputProps extends InputProps {
  label?: string; 
  placeholder?: string;
}

export default function TextInput({ label, placeholder, ...rest }: TextInputProps) {
 const theme = useTheme(); 
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        width: "100%",
      }}
    >
      {label && (
        <p style={{ fontSize: "14px", fontWeight: 500, margin: 0, color: theme.palette.text.primary,}}>{label}</p>
      )}

      <Input
        fullWidth
        disableUnderline
        placeholder={placeholder}
        {...rest}
        sx={{
       border: `1px solid ${theme.palette.divider}`,    
          borderRadius: "10px",         
          px: 1.5,                      
          py: 1,                        
          fontSize: "15px",
          height: "40px",               
         backgroundColor: theme.palette.background.paper,
          "&::placeholder": {
            color: theme.palette.text.secondary,
            opacity: 1,
          },
          "&:focus-within": {
             borderColor: theme.palette.primary.main,     
          },
        }}
      />
    </div>
  );
}
