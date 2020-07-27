import React from 'react';
import firebase from '../../fireconfig'
import Input from './Input';
import Button from './Button';

function Form() { 

    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');

    const login = () => {
        firebase.auth().signInWithEmailAndPassword(email, pass).then(user => {
          console.log(user)
            })
      }
 
    return (
        <form>
            <Input placeholder="Email" value={email} onChange={e=> setEmail(e.target.value)}/>  
            <Input type="password" placeholder="Senha" value={pass} onChange={e=> setPass(e.target.value)}/>
            <Button btname="LogIn" onClick={login}/>
        </form>
    );
  }
  
  export default Form;