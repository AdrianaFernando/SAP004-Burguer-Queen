import React, { useEffect, useState } from "react";
import "./modal.css";
import Radio from '../Radio/Radio'
import Button from '../Button/Button'
import firebase from '../../../fireconfig';
import 'firebase/auth'
import 'firebase/firestore';

function Modal(props) {
    const [menu, setMenu] = useState ()
    //const [extra, setExtra] = useState ()

    useEffect( () => { firebase.firestore().collection("menu")
.get()
.then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
       const data = doc.data()
       setMenu(data)
       console.log(data)           

    });
}) } , [])

    return(
        <div className='modal' ref={props.ref}>
            {menu && menu.burguer.map((item) => 
            <Radio text={item.item} />
            )}
            {menu && menu.extras.map((item) => 
            <Radio text={item.item} />
            )}
            <Button>Ok!</Button>
        </div>
    )
}

export default Modal;