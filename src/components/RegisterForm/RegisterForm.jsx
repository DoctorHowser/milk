import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RegisterInput from './RegisterInput'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import Typography from '@material-ui/core/Typography'
import { DateTime } from "luxon";
import QualityPicker from '../Common/QualityPicker';

function RegisterForm() {


  const userConfig = {
    username: { label: 'Email', type: 'email', required: true },
    password: { label: 'Password', type: 'password', required: true },
    name: { label: 'Name', type: 'text', required: true },
    address: { label: 'Address', type: 'text', required: true },
    phone: { label: 'Phone', type: 'tel', required: true },
    baby_birthdate: { label: 'Baby Birthday', type: 'date', required: true }
  }

  const defaultUser = {
    username: '',
    password: '',
    name: '',
    address: '',
    phone: '',
    baby_birthdate: DateTime.now().toFormat('yyyy-MM-dd')
  }

  const [user, setUser] = useState(defaultUser);
  const errors = useSelector((store) => store.errors);
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
      payload: user,
    });
  }; // end registerUser

  let inputs = [];
  for (let key in user) {
    console.log(user[key])
    inputs.push(
      <Grid key={key} item>
        <RegisterInput
          
          onChange={e => handleUserFormChange(key, e.target.value)}
          config={userConfig[key]}
          data={user[key]}
        />
      </Grid>)
  }

  return (
    
    <Paper>
      <Grid container spacing={2} justify='center'>
      <form onSubmit={registerUser}>
        <Grid item xs={12}>
        <Typography variant='h3' gutterBottom>Get Started</Typography>

        </Grid>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        {inputs}
        <QualityPicker />
        <div>
          <input className="btn" type="submit" name="submit" value="Register" />
        </div>
      </form>
      </Grid>
    </Paper>
  );
}

export default RegisterForm;
