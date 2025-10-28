import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#000000' },
    secondary: { main: '#ffffff' },
  },
  typography: {
    fontFamily: "'Roboto', system-ui, Arial, sans-serif, 'Merriweather', 'Times New Roman', serif",
    h1: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.2,
    },
  },
});
