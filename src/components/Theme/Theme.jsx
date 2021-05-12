import { createMuiTheme, ThemeProvider, Container, CssBaseline } from '@material-ui/core'
import 'fontsource-roboto';


const theme = createMuiTheme({
    palette: {
        type: 'light',
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
            <Container maxWidth={false}>
                {/* <Grid container spacing={2} alignItems='center'> */}
                    {children}
                {/* </Grid> */}
            </Container>
        </ThemeProvider>
    )
}