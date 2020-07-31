import React from 'react';
//import { isAuthenticated } from "./auth"
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import firebase from './fireconfig'
import "firebase/auth";
import "firebase/firestore";

import login from './pages/login'
import Register from './pages/Register'
import Garcom from './pages/garçom/garcom'
import Cozinha from './pages/cozinha/cozinha'


/* const PrivateRoute = ({ component: Component, ...rest } ) => (
  <Route 
  {...rest}
  render={props =>
    firebase.auth().currentUser.cargo ? (
      <Component {...props} />
    
    ) : 
    return 
    <Redirect to={{ pathname: "/garcom", 
    state: { from: props.location } }} /> || <Redirect to={{ pathname: "/cozinha", 
    state: { from: props.location } }} />
    } */


const PrivateRoute = ({ component: Component, ...rest } ) => (
  <Route
    {...rest}
    render={props =>
    firebase.auth().currentUser ? (

        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/garcom"}} />
        
        
      )
    }
  />
); 

  //const authenticated = localStorage.getItem('@SuaAplicacao:JWT_TOKEN');

  //if (!authenticated && isPrivate) return <Redirect to={redirectTo} />;

  //return <Route {...rest} render={props => <Component {...props} />} />;
//} 

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={login} />
        <Route path="/cadastro" component={Register} />
        <PrivateRoute path="/garcom" component={Garcom}/>
        <PrivateRoute path="/cozinha" component={Cozinha} />
      </Switch>
    </BrowserRouter>
  );
  
   

  export default Routes;