import { createMuiTheme, ThemeProvider, Container, Grid } from '@material-ui/core'
import 'fontsource-roboto';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#DBFFD6'
        },
        secondary: {
            main: '#ECEAE4'
        }
    }
})

export default function Theme({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm">
                {/* <Grid container spacing={2} alignItems='center'> */}
                    {children}
                {/* </Grid> */}
                
            </Container>
        </ThemeProvider>
    )
}