import React, {useState} from 'react';
import Input from './Input';
import Button from './Button';
import firebase from '../../fireconfig.js';
import 'firebase/auth';
import 'firebase/firestore';
//import * as firebase from "firebase/app";



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

            <Input placeholder="Nome" value={name} onChange={e=> setName(e.target.value)}/>  
            <Input placeholder="Email" value={email} onChange={e=> setEmail(e.target.value)}/>  
            <Input type="password" placeholder="Senha" value={pass} onChange={e=> setPass(e.target.value)}/>
            <Input type="radio" text="Salão" value="salão" name='cargo' onChange={e=> setCargo(e.target.value)}/>
            <Input type="radio" text="Cozinha" value="cozinha" name='cargo' onChange={e=> setCargo(e.target.value)}/>
            <Button onClick={e=> register(e)}>Cadastrar</Button>
            <Button>Voltar</Button>
        </form>
      </>
    );
}
    
  export default FormCad;





   /* function user (name, email, cargo){
      firebaseapp
      .createUserWithEmailAndPassword(name, password)
        .then(() => {
          user.updateProfile({ displayName: userId });
        })
        .then(() => {
          const uid = firebase.auth().currentUser.uid;
          userCollection.doc(uid).set(document);
        })
        .catch((error) => {
          const errorResult = errorRegister.filter(item => item.code === error.code);
          errorFunc(errorResult[0].message);
        });
    } 
 */

  /* const user = (e) => {
        e.preventDefault()
        console.log(email,pass)
      firebaseapp.auth().createUserWithEmailAndPassword(name, email, cargo).then(user => {
        console.log(user)
          })
    }; */