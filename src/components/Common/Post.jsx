import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { DeleteForever, Edit } from '@material-ui/icons';
import QualityChip from './QualityChip';

import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '100%',
    marginTop: '1em'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Post({ data, offer, request }) {
  const classes = useStyles();
  const { qualities } = useSelector(store => store.milkQualities)
  const { userData } = useSelector(store => store.user)

  const dispatch = useDispatch()

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDelete = () => {
    if(offer) {
      dispatch({ type: 'DELETE_OFFER', payload: data.id })

    } else if (request) {
      dispatch({ type: 'DELETE_REQUEST', payload: data.id })

    }
  }
  console.log(request, offer, data)

  return (
    <Card className={classes.root}>
      <CardHeader
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        action={
          userData.id === data.user_id && <IconButton color="primary" aria-label="settings" onClick={handleDelete}>
            <DeleteForever />
          </IconButton>
        }
        title={`${data.name}`}
        subheader={data.post_date}
      />
      {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
      <CardContent>
        {offer && (
        <Typography variant="body2" color="textSecondary" component="p">
          Offering: {data.volume}
        </Typography>
        )}
        <Typography variant="body1" color="textSecondary" component="p">
          Location: {data.address}
        </Typography>
        { offer && (<Typography paragraph>
          Milk Qualities:
        </Typography>
        )}
        { request && (<Typography paragraph>
          Milk Qualities Requested:
        </Typography>
        )}
        <Grid container>
          {qualities.map(quality => {
            return (
              data.qualities.includes(quality.id) &&
              <QualityChip
                key={quality.id}
                item={quality}
                selectedQualities={data.qualities}
                handleSelect={() => { }}
                clickable={false}
              />
            )
          })

          }
        </Grid>

      </CardContent>
      <CardActions disableSpacing>
        {userData.id === data.user_id && (
        <IconButton aria-label="Edit Post">
          <Edit />
        </IconButton>)}

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          color="primary"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {offer && (
            <>
              <Typography paragraph>Donor Info:</Typography>
              <Typography paragraph>
                Milk Produced: {data.milk_date}
              </Typography>
              <Typography paragraph>
                Message From The Donor: {data.description}
              </Typography>
            </>
          )
          }
          {request && (
            <>
              <Typography paragraph>Request Info:</Typography>
              <Typography paragraph>
               Baby Name: {data.baby_name}
              </Typography>
              <Typography paragraph>
               Baby Date of Birth: {data.baby_dob}
              </Typography>
              <Typography paragraph>
                Message From The Requester: {data.story}
              </Typography>
            </>
          )
          }



        </CardContent>
      </Collapse>
    </Card>
  );
}
