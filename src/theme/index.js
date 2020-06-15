import { createMuiTheme } from '@material-ui/core';
import typography from './typography';

const MuiTheme = createMuiTheme({
  palette: {
    type: 'light'
  },
  overrides: {
  },
  typography
});

export default MuiTheme;
