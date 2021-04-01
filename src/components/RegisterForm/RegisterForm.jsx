import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RegisterInput from './RegisterInput'


function RegisterForm() {
  const userConfig = {
    username: { label: 'Email', type: 'email', required : true },
    password: { label: 'Password', type: 'password', required : true },
    name: { label: 'Name', type: 'text', required : true },
    address: { label: 'Address', type: 'text', required : true },
    phone: { label: 'Phone', type: 'tel', required : true },
    baby_birthdate: { label: 'Baby Birthday', type: 'date', required : true }
  }

  const defaultUser = {
    username : '',
    password: '',
    name: '',
    address : '',
    phone: '',
    baby_birthdate: ''
  }

  const [user, setUser] = useState(defaultUser);
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const handleUserFormChange = (key, value) => {
    setUser(
      {...user, 
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
  for(let key in user) {
    console.log(user[key])
    inputs.push(
    <RegisterInput 
      key={key}
      onChange={e => handleUserFormChange(key, e.target.value)}
      config={userConfig[key]}
      data={user[key]}
      />)
  }

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      {inputs}
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
