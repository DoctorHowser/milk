import React from 'react';
import LogOutButton from '../Common/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.name}!</h2>
      <p>Your ID is: {user.id}</p>
      <h3>{user.baby_birthdate}</h3>
      <h3>{user.address}</h3>
      <h3>{user.phone}</h3>
      <h3>{user.username}</h3>
      <a target="_blank" href={user.milk_bag_link}>Preferred Milk Bag</a>
      

      <ul>
        {user.qualities.map(quality => {
          return <li key={quality.id}>{quality.name}</li>
        })}
      </ul>
      <LogOutButton />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
