import React from '../../../node_modules/react';
import { useHistory } from "react-router-dom";
import Input from './Input';
import Button from './Button';
import firebase from '../../fireconfig.js';
import 'firebase/auth'
import 'firebase/firestore'


/* essa já era uma funcion comentada 
function ActionLink() {
    function handleClick(e) {
      e.preventDefault();
      console.log('O link foi clicado.');
    } */

        /* const cadastro = () => {
          firebase.auth().createUserWithEmailAndPassword(email, pass).then(user => {
            console.log(user)
          }) */


          function Form() { 
            const [email, setEmail] = React.useState('');
            const [pass, setPass] = React.useState('');
            let history = useHistory();

            const login = (e) => {
                e.preventDefault()
                console.log(email,pass)
              firebase
              .auth()
              .signInWithEmailAndPassword(email, pass).then(user=> {
                console.log(user.user.uid)
                firebase.firestore() 
                  .collection("user")
                  .doc(user.user.uid)
                  .get().then((user1) => {
                    console.log(user1.data())
                      if (user1.data().cargo === "salão") {
                        history.push("/garcom")
                        console.log(history)
                      }else{
                        history.push("/cozinha")
                        console.log(history)
                      }
                  })  
                               
              })
                            
              }

                //console.log(user)
                
           
        
            return (
                <form>
                        <p>
                            <Input placeholder="Email" 
                            value={email} onChange={e=> setEmail(e.target.value)}
                            />  
                        </p>
                        <p>
                            <Input type="password" placeholder="Senha" 
                            value={pass} onChange={e=> setPass(e.target.value)}
                            />
                        </p>
                    <Button onClick={e=> login(e)}>Logar</Button>
                    
                </form>
                 
                );
              };
            
                  
          export default Form;