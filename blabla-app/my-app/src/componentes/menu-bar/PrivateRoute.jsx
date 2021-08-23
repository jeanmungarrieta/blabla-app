import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserPage from './userPage';


const PrivateRoute = () => {
  
    return (
        <Route  render={() => (
           
            <UserPage>
             
             </UserPage>
        )} />
    );
};

export default PrivateRoute;