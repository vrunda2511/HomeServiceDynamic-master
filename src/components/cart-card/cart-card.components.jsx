import React,{useState,useEffect} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import './cart-card.styles.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function CartCard({cart_id,cartid,sub_servicename,subservice_id, price, time_duration,image}) {
  var subserviceKIID=[]
  
  function removecart(event) {
   
  var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };
  
  fetch("http://localhost:4000/api/RemoveFromCart/"+cart_id, requestOptions)
    .then(response => response.json())
    .then(result => {console.log(result)
      refreshPage()
    })
    .catch(error => console.log('error', error));
 }

      
 
 function refreshPage() {
  window.location.reload(false);
}
      
      const classes = useStyles();
      const theme = useTheme();
      var res=[];
     
      return (
        
        <Card className={classes.root, 'col-md-6', 'cartCard'}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
         
          <Typography component="h5" variant="h5">
          {sub_servicename}
          {  subserviceKIID.push(subservice_id)}
           {/* {console.log(subserviceKIID)} */}
          </Typography>
          <Typography variant="h6" color="textSecondary">
          {price}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Duration: {time_duration}
          </Typography>
          <Button variant="contained"  color="secondary" onClick={(e)=>removecart()}>
  Remove
</Button>
        </CardContent>
        {/* <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div> */}
      </div>
      <CardMedia
        className={classes.cover, 'cartImage'}
        image={image}
        title="Live from space album cover"
      />
    </Card>

  );
}