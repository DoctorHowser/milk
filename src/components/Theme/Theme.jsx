import {createMuiTheme, ThemeProvider} from '@material-ui/core'
import 'fontsource-roboto';

const theme = createMuiTheme({
    palette : {
        primary : {
            main: '#DBFFD6'
        },
        secondary: {
            main: '#ECEAE4'
        }
    }
})

export default function Theme ({children}) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}