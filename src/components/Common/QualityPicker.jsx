import { Chip, Box, Typography } from '@material-ui/core'
import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import  {FETCH_QUALITIES}  from '../../redux/actions/qualities.actions'


export default function QualityPicker() {

    //replace with reducer
    const qualities = useSelector((state) => state.qualities)
    const [selected, setSelected] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: FETCH_QUALITIES})
    }, [])

    const handleSelect = (id) => {
        selected.includes(id)
            ? setSelected(selected.filter((index) => index !== id))
            : setSelected([...selected, id]);
    };


    return (
        <Box >
            <Typography variant='h6'>Milk Qualities</Typography>
            <div>
                {qualities.map((item) => (
                    <Chip
                        color={selected.includes(item.id) ? 'primary' : 'default'}
                        key={item.id}
                        label={item.name}
                        onClick={() => handleSelect(item.id)}
                    />
                ))}
            </div>
        </Box>
    )
}