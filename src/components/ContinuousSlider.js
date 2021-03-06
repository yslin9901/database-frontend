import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {useDispatch} from 'react-redux'
import { songTempo, songEnergy, songLiveness } from '../actions'

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

export default function ContinuousSlider(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch(props.title){
      case 'Tempo': {
        dispatch(songTempo(newValue))
        break;
      }
      case 'Energy': {
        dispatch(songEnergy(newValue))
        break;
      }
      case 'Liveness': {
        dispatch(songLiveness(newValue))
        break;
      }
      default: {
        console.log('invalid slider')
      }
    }
  };

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        {props.title}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs>
          <Slider 
            value={value} 
            onChange={handleChange} 
            aria-labelledby="continuous-slider" 
            step={props.step}
            max={props.max}
            min={0}
            valueLabelDisplay="auto"
          />
        </Grid>
      </Grid>
    </div>
  );
}