import React, { useEffect, useState } from 'react';
import LogOutButton from '../Common/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import QualityPicker from '../Common/QualityPicker'


import { Typography, Button, Grid, Box } from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import UserDetailEdit from './UserDetailEdit'
import UserDetailDisplay from './UserDetailDisplay';

function UserPage() {

  useEffect(() => {
    console.log('Mounted userpage');

    return () => {
      console.log('unmounting')
    }
  }, [])

  const { userData } = useSelector((store) => store.user);

  const [isEditing, setIsEditing] = useState(false);

  const setEdit = () => {
    console.log('clicked edit');
    setIsEditing(true);

  }

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  }

  return (
    <Grid container spacing={2} justify="space-evenly">
      <Grid item xs={12}>
        <Typography variant='h2'>Welcome, {userData.name}!</Typography>
      </Grid>
      {isEditing ? <UserDetailEdit toggleEdit={toggleEdit} /> : <UserDetailDisplay userData={userData} />}

      <QualityPicker action='TOGGLE_SELECTED_QUALITY' editable={isEditing} />
      {!isEditing &&
          (<Button
            variant="contained"
            color="secondary"
            startIcon={<Edit />}
            onClick={setEdit}
          >
            Edit Profile
          </Button>)
        }
      <LogOutButton />
    </Grid>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
