
import { Typography, Link, Grid } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'

export default function UserDetailDisplay({ userData }) {
    return (
        <>

            <Grid item xs="6">
                <Typography variant="subtitle1">Your Baby's Birthday:</Typography>
                <Typography>{userData.baby_birthdate}</Typography>
            </Grid>
            <Grid item xs="6">
                <Typography variant="subtitle1">Location:</Typography>
                <Typography variant="subtitle1">{userData.address}</Typography>

            </Grid>
            <Grid item xs="6">
                <Typography variant="subtitle1">Phone: {userData.phone}</Typography>
            </Grid>
            <Grid item xs="6">
                <Typography variant="body1">

                    <Link target="_blank" href={userData.milk_bag_link}>
                        <ShoppingCart />

                        Preferred Milk Bag
                    </Link>
                </Typography>
            </Grid>


        </>
    )
}