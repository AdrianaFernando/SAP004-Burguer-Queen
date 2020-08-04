import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function InputTxt(props) {
  const classes = useStyles();
  /* const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  }; */

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
            value={props.value}
            id="filled-textarea"
            label={props.label}
            multiline
            variant="filled"
        />
      </div>

    </form>
  );
}
export default InputTxt;