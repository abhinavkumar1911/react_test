import React from 'react';
import ReactDOM from 'react-dom/client';
//import reportWebVitals from './reportWebVitals';
import UserAdd from './Add_Detail/add_detail';
import HomePage from './homepage/HomePage';
import About from './about/About';
import { BrowserRouter, createBrowserRouter , RouterProvider} from 'react-router-dom';


const router=createBrowserRouter(
  [
    {
      element : <About/>,
      path : "/About",
    },
    {
      element : <HomePage/>,
      path : "/HomePage",
    },
    {
      element : <UserAdd/>,
      path : "/add_detail",
    }, 
  ]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
///reportWebVitals();
