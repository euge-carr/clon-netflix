import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Router } from './routes/app.routes';
import AuthProvider from './auth/context/AuthProvider'

const App = () => {
  return( 
  <AuthProvider>
    <RouterProvider router={Router} />
  </AuthProvider>
  ) 
}

export default App