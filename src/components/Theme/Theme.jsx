import { createMuiTheme, ThemeProvider, Container, Paper, CssBaseline } from '@material-ui/core'
import 'fontsource-roboto';


const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#c8ecc1',
        },
        secondary: {
          main: '#64b5f6',
        },
      },
      spacing: 8,
})

export default function Theme({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container disableGutters maxWidth={false}>
                {/* <Grid container spacing={2} alignItems='center'> */}
                    {children}
                {/* </Grid> */}
            </Container>
        </ThemeProvider>
    )
}