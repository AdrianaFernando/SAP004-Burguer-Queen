import React, {useState} from 'react';
import InputTxt from './Input';
import BtnButton from './Button';
import Password from './Password';
import RadioBtn from './Radio';
import firebase from '../../fireconfig.js';
import 'firebase/auth';
import 'firebase/firestore';



function FormCad() { 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState(''); 
    const [cargo, setCargo] = useState(''); 
    

    const register = (e) => {
      e.preventDefault()
      firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
      const userId = firebase.auth().currentUser.uid
      firebase
      .firestore()
      .collection('user')
      .doc(userId)
      .set({
          id_user: userId,
          displayName: name,
          email: email,
          cargo: cargo

      })
      .then(
        firebase.auth().currentUser.updateProfile({
          displayName: name, 
        })
      )
      }
      )}


    return (
      <>
        <form>

            <InputTxt placeholder="Nome" value={name} onChange={e=> setName(e.target.value)}/>  
            <InputTxt placeholder="Email" value={email} onChange={e=> setEmail(e.target.value)}/>  
            <Password placeholder="Senha" value={pass} onChange={e=> setPass(e.target.value)}/>
            <RadioBtn label="Salão" text="Salão" value="salão" name='cargo' onChange={e=> setCargo(e.target.value)}/>
            <RadioBtn label="Cozinha" text="Cozinha" value="cozinha" name='cargo' onChange={e=> setCargo(e.target.value)}/>
            <BtnButton onClick={e=> register(e)}>Cadastrar</BtnButton>
            <BtnButton>Voltar</BtnButton>
        </form>
      </>
    );
}
    
  export default FormCad;
