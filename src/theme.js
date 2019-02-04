import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5f5f5f'
    },
    secondary: {
      main: '#f7b737'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    background: {
      default: '#f4f6ff',
      paper: '#fcfcfc'
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ['Oswald', 'Roboto', '-apple-system', 'sans-serif'].join(','),
    h6: {
      fontFamily: "'Oswald', sans-serif"
    }
  }
});

export default theme;
