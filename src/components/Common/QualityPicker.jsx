import { Chip, Box, Typography } from '@material-ui/core'
import { useState } from 'react'

//dummy data
const qualities = [{ id: 1, name: 'Soy Free' }, { id: 2, name: 'High Lipase' }]

export default function QualityPicker() {

    //replace with reducer
    const [items, setItems] = useState(qualities)
    const [selected, setSelected] = useState([])


    const handleSelect = (id) => {
        selected.includes(id)
            ? setSelected(selected.filter((index) => index !== id))
            : setSelected([...selected, id]);
    };


    return (
        <Box >
            <Typography variant='h6'>Milk Qualities</Typography>
            <div>
                {items.map((item) => (
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