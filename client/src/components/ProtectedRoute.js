import React from 'react';
import { Navigate,Outlet } from 'react-router-dom';


const isAuthenticated = () => {
  return !!localStorage.getItem('user');
};

const ProtectedRoute = () => {
        return isAuthenticated() ? <Outlet/>:<Navigate to="/home"/>;
          
};

export default ProtectedRoute;