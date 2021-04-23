import React, { useEffect, useState } from 'react';
import LogOutButton from '../Common/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import QualityPicker from '../Common/QualityPicker'

import {EDIT_SELECTED_QUALITIES} from '../../redux/actions/qualities.actions'

import { Typography, Button, Grid } from '@material-ui/core'
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
 
  const {userData} = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);

  const setEdit = () => {
    console.log('clicked edit'); 
    setIsEditing(true);
   
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  }

  console.log('rendered userpage', isEditing);
  return (
    <Grid container spacing={2} justify="space-evenly">
      <Typography variant='h2'>Welcome, {userData.name}!</Typography>
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

      {isEditing ? <UserDetailEdit toggleEdit={toggleEdit}/> : <UserDetailDisplay userData={userData} />}

      <QualityPicker action='TOGGLE_SELECTED_QUALITY' editable={isEditing} />
      <LogOutButton />
    </Grid>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
