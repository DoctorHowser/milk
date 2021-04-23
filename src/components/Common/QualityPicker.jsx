import { Typography, Grid } from '@material-ui/core'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_QUALITIES } from '../../redux/actions/qualities.actions'
import QualityChip from './QualityChip'


export default function QualityPicker({ editable, action }) {

    const { qualities, selectedQualities } = useSelector((state) => state.milkQualities)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: FETCH_QUALITIES })
    }, [])

    const handleSelect = (id) => {
        if (editable) {
            dispatch({ type: action, payload: id })
        }
    };


    return (
        <>
            <Grid item xs={12}>
                <Typography align="center" variant='h6'>Milk Qualities</Typography>
            </Grid>

            <Grid item xs={12} container>

                {qualities.map((item) => {
                    return (
                        <QualityChip  key={item.id} handleSelect={handleSelect} item={item} selectedQualities={selectedQualities} />
                    )
                })}
            </Grid>


        </>
    )
}