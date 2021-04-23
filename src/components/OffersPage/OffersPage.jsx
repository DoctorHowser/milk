
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

export default function OffersPage() {
    const styles = useStyles();
    const offers = useSelector(store => store.offers)
    const [offer, setOffer] = useState({})

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_OFFERS' })
    }, [])



    const [open, setOpen] = useState(false);

    const handleChange = (key, value) => {
        setOffer(
            {
                ...offer,
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

        console.log(offer)
        dispatch({type: 'ADD_OFFER', payload: offer, onSuccess:handleClose})
    }

    return (
        <>
            <Typography align="center" variant="h4">OFFERS</Typography>


            {offers.map(offer => {
                return (
                    <Post key={offer.id} type='offer' data={offer} />
                )
            })}
            <Grid item>
                <Fab onClick={handleClick} className={styles.fab} size='large' color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Grid>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add New Offer
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Volume of Donation (ml)"
                        type="email"
                        fullWidth
                        onChange={(event) => handleChange('volume', event.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Date of Production"
                        type="date"
                        fullWidth
                        onChange={(event) => handleChange('milk_date', event.target.value)}

                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Description/Notes"
                        type="email"
                        fullWidth
                        multiline
                        onChange={(event) => handleChange('description', event.target.value)}

                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAdd} color="primary">
                        Add New Offer
                    </Button>
                </DialogActions>
            </Dialog>


        </>
    )
}