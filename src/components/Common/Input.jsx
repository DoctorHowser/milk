import {Grid, TextField} from '@material-ui/core'


export default function Input({ onChange, config, data }) {
    return (
        <Grid item>
            <TextField
                label={config.label}
                type={config.type}
                name={data}
                value={data}
                required={config.required || false}
                onChange={onChange}
                InputLabelProps={{
                    shrink: !!data
                }}
            />
        </Grid>
    )
}