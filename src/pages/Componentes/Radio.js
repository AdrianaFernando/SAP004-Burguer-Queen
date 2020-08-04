import React from 'react';
import { Radio } from '@material-ui/core';

function RadioBtn(props) {

    return (
        <Radio id={props.id}
            label={props.label} 
            variant="outlined"
            placeholder={props.placeholder}
            value={props.value}
            {...props}>
        </Radio>
    );
  }
  
  export default RadioBtn;