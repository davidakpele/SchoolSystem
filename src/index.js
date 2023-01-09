import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/components/__layouts/App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import Login from "./app/components/__layouts/StudentAuth/Login";
import Registration from "./app/components/__layouts/StudentAuth/Registration";
import Recover from "./app/components/__layouts/StudentAuth/___ResetPassword";
import RetrieveAuth from "./app/components/__layouts/StudentAuth/___RetrieveMatricNum";
import ParentLogin from "./app/components/__layouts/ParentAuth/Login";
import ProgrammeEntryRequirements from "./app/components/__layouts/App/ProgrammeEntryRequirements";
const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Registration",
    element: <Registration />,
  },
  {
    path: "/ParentLogin",
    element: <ParentLogin />,
  },

  {
    path: "/RetrieveAuth",
    element: <RetrieveAuth />,
  },
  {
    path: "/Recover",
    element: <Recover />,
  },
  {
    path: "/ProgrammeEntryRequirements",
    element: <ProgrammeEntryRequirements />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={ router } />
);
reportWebVitals();
