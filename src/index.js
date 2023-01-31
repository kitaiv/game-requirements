import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';  
import './fonts/Gilroy/Gilroy-Light.ttf';
import './fonts/Gilroy/Gilroy-Medium.ttf';
import './fonts/Gilroy/Gilroy-Bold.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);