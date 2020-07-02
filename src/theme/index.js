import { createMuiTheme } from '@material-ui/core';
import typography from './typography';

const MuiTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#BFC6FF',
      main: '#344BFF',
      dark: '#2A4BA1'
    }
  },
  overrides: {
    MuiStep: {
      root: {
        
      }
    }
  },
  typography
});

export default MuiTheme;
