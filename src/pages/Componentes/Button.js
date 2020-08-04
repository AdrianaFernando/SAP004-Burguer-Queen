import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function BtnButton(props) {
  const classes = useStyles();

  return (
      <Button 
      className={classes.root} 
      variant="outlined" 
      color="primary" 
      {...props}>
        {props.children}
      </Button>
    
  );
}

export default BtnButton;