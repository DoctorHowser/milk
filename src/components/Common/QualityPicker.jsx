import { Chip, Box, Typography } from '@material-ui/core'
import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import  {FETCH_QUALITIES, TOGGLE_SELECTED_QUALITY_OFF, TOGGLE_SELECTED_QUALITY_ON}  from '../../redux/actions/qualities.actions'


export default function QualityPicker() {

    //replace with reducer
    const {qualities, selectedQualities} = useSelector((state) => state.milkQualities)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: FETCH_QUALITIES})
    }, [])

    const handleSelect = (id) => {
        selectedQualities.includes(id)
            ? dispatch({type: TOGGLE_SELECTED_QUALITY_OFF, payload: id})
            : dispatch({type: TOGGLE_SELECTED_QUALITY_ON, payload: id})
    };


    return (
        <Box >
            <Typography variant='h6'>Milk Qualities</Typography>
            <div>
                {qualities.map((item) => (
                    <Chip
                        color={selectedQualities.includes(item.id) ? 'secondary' : 'default'}
                        key={item.id}
                        label={item.name}
                        onClick={() => handleSelect(item.id)}
                    />
                ))}
            </div>
        </Box>
    )
}