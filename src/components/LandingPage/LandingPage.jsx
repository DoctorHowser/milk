import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  const onRegister = () => {
    history.push('/registration')
  }

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
          A global network represented by individuals. 
          We provide a space where families in need can connect with women who have milk to share. 
          Milk affirms that human milk is the biological norm for human infants and children. 
          Milk does not support the sale of human milk.
          </p>

          <quote>
          "Breastmilk is not some sort of scarce commodity; it is a free flowing resource." - Emma Kwasnica
          </quote>
        </div>
        <div className="grid-col grid-col_4">
          {/* <RegisterForm /> */}
          <h4>Milk is great!</h4>

          <button className="btn btn_sizeSm" onClick={onRegister}>Get Started!</button>
          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
