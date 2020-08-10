import React, { useEffect, useState } from "react";
import "./productsContainer.css";
import ButtonIn from '../ButtonIn/ButtonIn';
import Input from "../Input/Input";
import Modal from '../Modal/Modal';
import firebase from '../../../fireconfig';
import 'firebase/auth'
import 'firebase/firestore';


function ProductsContainer() {
const [menu, setMenu] = useState ()
const [morning, setMorning] = useState (false)
const [all, setAll] = useState (false)
const [orders, setOrders] = useState([]);
const [modal, setModal] = useState (false)

useEffect( () => { firebase.firestore().collection("menu")
.get()
.then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
       const data = doc.data()
       setMenu(data)           

    });
}) } , [])

function openBreakfast(){
  setMorning(true)
  setAll(false)
  }
function openAllDay(){
  setMorning(false)
  setAll(true)
  }
  
function newRequest(item){
    if(item.item !== 'Hambúrguer simples' && item.item !== 'Hambúrguer duplo'){
      setOrders([...orders, item]);
    }
    else{
      setModal(true)
    }

};

/* function showModal(){
  setModal('show')
} */


  return (
    <>
    <form className='input-request'>
          <Input placeholder="Cliente"></Input>
          <Input placeholder="Nº da Mesa"></Input>
        </form> 
      <div className='btn-request'>  
        <ButtonIn onClick={openBreakfast}> Café da Manhã </ButtonIn>
        <ButtonIn onClick={openAllDay}> Todo o dia </ButtonIn> 
      </div>  
    <div className="pr-container">
        <div>
            {morning && menu.breakfast.map((item) => 
            <div className='card' onClick={() => 
              newRequest(item)}> 
            <img className='product' src={item.img} alt="" />
            <div className='product-name'>
            <h3>{item.item}</h3> <br/> 
            <p>R${item.price}</p> <br/>
            </div>
            </div>)}

            {all && menu.allday.map((item) => 
            <div className='card' onClick={() => 
              newRequest(item)}>  
            <img className='product' src={item.img} alt=""  />
            <div className='product-name'>
            <h3>{item.item}</h3> <br/> 
            <p>R${item.price}</p> <br/>
            </div>
            </div>)}
            {modal && <Modal /> }
        </div>    

    </div>
    <div> Comanda
         {orders && orders.map((item) => (
            <div>
              <li>{item.item} R${item.price}</li>
            </div>
         ))
         }</div>
    </>
)}

export default ProductsContainer;
