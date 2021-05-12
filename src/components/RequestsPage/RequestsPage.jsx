
import { Fab, Grid, Typography, makeStyles } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Common/Post'
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

export default function RequestsPage() {
    const styles = useStyles();
    const requests = useSelector(store => store.requests)
    const [request, setRequest] = useState({})

    const dispatch = useDispatch();
    useEffect(() => {
        console.log('requests')
        dispatch({ type: 'FETCH_REQUESTS' })
    }, [])



    const [open, setOpen] = useState(false);

    const handleChange = (key, value) => {
        setRequest(
            {
                ...request,
                [key]: value
            }
        )
    }



    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = () => {

        console.log(request)
        dispatch({type: 'ADD_REQUEST', payload: request, onSuccess: handleClose})
    }

    console.log('requests rendered', requests)
    return (
        <Grid container>
            <Typography align="center" variant="h4">REQUESTS</Typography>


            {requests.map(request => {
                return (
                    <Post key={request.id} request data={request} />
                )
            })}
            <Grid item>
                <Fab onClick={handleClick} className={styles.fab} size='large' color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Grid>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Request</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add New Request
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Baby's Name"
                        type="email"
                        fullWidth
                        onChange={(event) => handleChange('baby_name', event.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Date of Birth"
                        type="date"
                        fullWidth
                        onChange={(event) => handleChange('baby_dob', event.target.value)}

                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="My Story"
                        type="email"
                        fullWidth
                        multiline
                        onChange={(event) => handleChange('story', event.target.value)}

                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAdd} color="primary">
                        Add New Request
                    </Button>
                </DialogActions>
            </Dialog>


        </Grid>
    )
}