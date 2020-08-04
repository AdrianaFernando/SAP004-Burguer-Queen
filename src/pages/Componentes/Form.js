import React from '../../../node_modules/react';
import { useHistory } from "react-router-dom";
import InputTxt from './Input';
import BtnButton from './Button';
import Password from './Password';
import firebase from '../../fireconfig.js';
import 'firebase/auth'
import 'firebase/firestore'


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

  
                
           
        
            return (
                <form>
                        <p>
                            <InputTxt 
                            label="E-mail"
                            type="text"
                            value={email} 
                            onChange={e=> setEmail(e.target.value)}
                            />  
                        </p>
                        <p>
                            <Password placeholder="Senha" 
                            value={pass} onChange={e=> setPass(e.target.value)}
                            />
                        </p>
                    <BtnButton onClick={e=>login(e)}>Entrar</BtnButton>
                    
                </form>
                 
                );
              };
            
                  
          export default Form;