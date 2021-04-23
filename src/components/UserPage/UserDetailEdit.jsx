import { useDispatch, useSelector } from 'react-redux'
import { userConfig } from '../../config/forms'
import Input from '../Common/Input';
import { Button, Grid, Box } from '@material-ui/core'
import { useEffect } from 'react';



export default function UserDetailEdit({ toggleEdit }) {
    const dispatch = useDispatch();
    const  edit  = useSelector((store) => store.edit);
    const {selectedQualities} = useSelector(store => store.milkQualities)

    useEffect(() => {
      dispatch({type: 'SET_EDIT_USER_FLOW'})

    },[])

    const handleUserFormChange = (key, value) => {
        dispatch(
            {type: 'UPDATE_USER_FIELD', payload : {key, value}}
        )
    }

    const save = (e) => {
        e.preventDefault();
        dispatch({type: 'UPDATE_USER', payload: {...edit, qualities: selectedQualities }, onComplete: toggleEdit})
        // toggleEdit()
    }

    const cancel = () => {
        toggleEdit()
    }

    let inputs = [];
    for (let key in userConfig) {
        userConfig[key].editable && inputs.push(
            <Input
                key={key}
                onChange={e => handleUserFormChange(key, e.target.value)}
                config={userConfig[key]}
                data={edit[key]}
            />
        )
    }

    return (
        <Grid item xs={12} container spacing={2} justify="center">

            <form onSubmit={save}>
                <Box>
                    {inputs}
                </Box>

                <Grid item xs={3}>
                    <Button variant='contained' color='primary' type='submit'>Save</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant='outlined' color='secondary' onClick={cancel}>Cancel</Button>

                </Grid>

            </form>
        </Grid>
    )
}