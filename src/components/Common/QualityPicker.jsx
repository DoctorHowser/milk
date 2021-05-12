import { Typography, Grid } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import QualityChip from './QualityChip'


export default function QualityPicker({ editable, action }) {
    const dispatch = useDispatch();
    const { qualities, selectedQualities } = useSelector((state) => state.milkQualities)


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
                        <QualityChip clickable={editable} key={item.id} handleSelect={handleSelect} item={item} selectedQualities={selectedQualities} />
                    )
                })}
            </Grid>


        </>
    )
}