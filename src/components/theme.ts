import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E1A47',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  components: {
    // Style customizations go here...
    
    // MuiSelect: {
    //   styleOverrides: {
    //     root: {
    //       maxHeight: '2rem',
    //     }
    //   }
    // },
  },
});

export default theme;