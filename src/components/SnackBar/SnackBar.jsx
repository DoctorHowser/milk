import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function SimpleSnackbar() {
  const [open, setOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('')
  const messages = useSelector(store => store.messages)
  const dispatch = useDispatch()

  useEffect(() => {
      console.log(open, messages);
    if (!open && messages.length) {
        setCurrentMessage(messages[0])
        dispatch({type: 'DISPLAYED_MESSAGE'})
        setOpen(true)
    } else if (open && messages.length && currentMessage) {
        setOpen(false)
    } 
  }, [messages, open, currentMessage])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    handleExited();

  };

  const handleExited = () => {
    setCurrentMessage('')
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        onExited={handleExited}
        message={currentMessage}
        action={
          <>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </div>
  );
}