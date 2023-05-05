import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './routes/Root.js'
import Lost from './routes/Lost.js'
import NotFound from './routes/NotFound.js'
import Excuse from './routes/Excuse.js'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<NotFound/>,
  },
  {
    path: "/lost",
    element: <Lost/>,
  },
  {
    path: "/$http_code/:httpcode",
    element: <Excuse/>,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
