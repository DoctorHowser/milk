import { Chip, Typography, Grid } from '@material-ui/core'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_QUALITIES, TOGGLE_SELECTED_QUALITY_OFF, TOGGLE_SELECTED_QUALITY_ON } from '../../redux/actions/qualities.actions'


export default function QualityPicker() {

    //replace with reducer
    const { qualities, selectedQualities } = useSelector((state) => state.milkQualities)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: FETCH_QUALITIES })
    }, [])

    const handleSelect = (id) => {
        selectedQualities.includes(id)
            ? dispatch({ type: TOGGLE_SELECTED_QUALITY_OFF, payload: id })
            : dispatch({ type: TOGGLE_SELECTED_QUALITY_ON, payload: id })
    };


    return (
        <>
            <Grid item xs={12}>
                <Typography align="center" variant='h6'>Milk Qualities</Typography>
            </Grid>

            {qualities.map((item) => (
                <Grid item>
                    <Chip
                        color={selectedQualities.includes(item.id) ? 'secondary' : 'default'}
                        key={item.id}
                        label={item.name}
                        onClick={() => handleSelect(item.id)}
                    />
                </Grid>

            ))}

        </>
    )
}