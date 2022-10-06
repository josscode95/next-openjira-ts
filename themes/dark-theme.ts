import { createTheme } from "@mui/material";
import { red, pink } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#19857b'
    },
    error: {
      main: pink[500]
    }
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          backgroundColor: '#4a148c'
        }
      }
    }
  }
});