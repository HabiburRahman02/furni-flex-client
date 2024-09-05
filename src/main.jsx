import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main/Main';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './provider/AuthProvider/AuthProvider';
import SignIn from './components/SignIn/SignIn';
import Products from './components/Products/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: ''
      },
      {
        path: '/products',
        element: <Products></Products>,
        loader: () => fetch('products.json')
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'signin',
        element: <SignIn></SignIn>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className=''>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </StrictMode>,
)
