import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Doctors from "../pages/Doctors/Doctors";
import SubDoc from "../pages/Doctors/SubDoc";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'doctor',
          element: <Doctors></Doctors>
        },
        {
          path: 'gallery',
          element: <SubDoc></SubDoc>
        }
      ]
    },
  ]);