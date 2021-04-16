
import {Typography, Link} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons'

export default function UserDetailDisplay({userData}) {
    return (
        <>
        <Typography>Your Baby's Birthday: {userData.baby_birthdate}</Typography>
        <Typography>Location: {userData.address}</Typography>
        <Typography>Phone: {userData.phone}</Typography>
  
        <Typography>
          <Link target="_blank" href={userData.milk_bag_link}>
          Preferred Milk Bag
          <ShoppingCart />
           </Link>
        </Typography>
        </>
    )
}