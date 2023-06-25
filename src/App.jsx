import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Router } from './core/routes/app.routes';
import AuthProvider from './core/auth/context/AuthProvider';
import RootProvider from './core/providers/RootProvider';


const App = () => {
  return( 
    <RootProvider>
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </RootProvider>
  ) 
}

export default App;