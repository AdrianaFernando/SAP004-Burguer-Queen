import React from 'react';
import './buttonIn.css'

function Button(props) {

    return (
        <button className='btn' onClick={props.onClick}>{props.children}</button>
    );
  }
  
  export default Button;