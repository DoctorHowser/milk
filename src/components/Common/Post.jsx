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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {DeleteForever} from '@material-ui/icons';
import QualityChip from './QualityChip';

import { useDispatch, useSelector } from 'react-redux'
import UserDetailEdit from '../UserPage/UserDetailEdit';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '90%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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

export default function Post({ data, type }) {
  const classes = useStyles();
  const { qualities } = useSelector(store => store.milkQualities)
  const  {userData}  = useSelector(store => store.user)

  const dispatch = useDispatch()

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDelete = () => {
    dispatch({type: 'DELETE_OFFER', payload: data.id})
  }

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
        title={data.name}
        subheader={data.post_date}
      />
      {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Offering: {data.volume}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          Location: {data.address}
        </Typography>
        <Typography paragraph>
          Milk Qualities:
        </Typography>
        <Grid container>
        {qualities.map(quality => {
          return (
            data.qualities.includes(quality.id) &&
            <QualityChip
              key={data.id}
              item={quality}
              selectedQualities={data.qualities}
              handleSelect={() => { }}
            />
          )
        })

        }
        </Grid>

      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
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
          <Typography paragraph>Info:</Typography>
          <Typography paragraph>
            Milk Produced: {data.milk_date}
          </Typography>
          <Typography paragraph>
            Message From The Donor: {data.description}
          </Typography>


        </CardContent>
      </Collapse>
    </Card>
  );
}
