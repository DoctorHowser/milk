import TextField from '@material-ui/core/TextField'

import { useEffect, useState } from 'react'

export default function RegisterInput({ onChange, config, data }) {
    console.log(data)
    return (
        <>
            <TextField
                fullWidth
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
        </>
    )
}