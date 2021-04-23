import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import Typography from '@material-ui/core/Typography'
import { DateTime } from "luxon";
import RegisterInput from '../Common/Input'
import QualityPicker from '../Common/QualityPicker';
import {userConfig} from '../../config/forms'

function RegisterForm() {

  const defaultUser = {
    username: '',
    password: '',
    name: '',
    address: '',
    phone: '',
    baby_birthdate: DateTime.now().toFormat('yyyy-MM-dd'),
    milk_bag_link: ''
  }

  const [user, setUser] = useState(defaultUser);
  const errors = useSelector((store) => store.errors);
  const { selectedQualities } = useSelector((state) => state.milkQualities)
  const dispatch = useDispatch();

  const handleUserFormChange = (key, value) => {
    setUser(
      {
        ...user,
        [key]: value
      }
    )
  }

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: { ...user, qualities: selectedQualities }


    });
  }; // end registerUser

  let inputs = [];
  for (let key in user) {
    inputs.push(
      <RegisterInput
        key={key}
        onChange={e => handleUserFormChange(key, e.target.value)}
        config={userConfig[key]}
        data={user[key]}
      />
    )
  }

  return (

    // <Paper>
    <Grid container spacing={2} justify="space-evenly">
      <Grid item xs={12} >
        <Typography align="center" variant='h3' gutterBottom>Get Started</Typography>
      </Grid>
      <form onSubmit={registerUser}>

        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        <Grid item xs={12} container spacing={2} justify="center">
          <Box>
            {inputs}
          </Box>
        </Grid>


        <Grid item xs={12} container spacing={2} justify="center" alignItems="center">
          <QualityPicker action='TOGGLE_SELECTED_QUALITY' editable />
        </Grid>

        <Grid item xs={12} container justify="flex-end" spacing={6}>
          <Grid item>
            <Button variant="contained" type="submit" name="submit">Register</Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
    // </Paper>
  );
}

export default RegisterForm;
