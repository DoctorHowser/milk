import { Chip, Typography, Grid } from '@material-ui/core'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_QUALITIES, TOGGLE_SELECTED_QUALITY } from '../../redux/actions/qualities.actions'


export default function QualityPicker({selectedQualities, editable}) {

    //replace with reducer
    const { qualities } = useSelector((state) => state.milkQualities)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: FETCH_QUALITIES })
    }, [])

    const handleSelect = (id) => {
        if(editable) {
            dispatch({ type: TOGGLE_SELECTED_QUALITY, payload: id })
        }
    };


    return (
        <>
            <Grid item xs={12}>
                <Typography align="center" variant='h6'>Milk Qualities</Typography>
            </Grid>

            <Grid item xs={12} container>

            {qualities.map((item) => (
                <Grid key={item.id} item xs={4}>
                    <Chip
                        color={selectedQualities.includes(item.id) ? 'secondary' : 'default'}
                        key={item.id}
                        label={item.name}
                        onClick={() => handleSelect(item.id)}
                    />
                </Grid>

            ))}
            </Grid>


        </>
    )
}