import {
    createBrowserRouter,
    RouterProvider,
    
  } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Booking from "../Pages/Booking/Booking";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import LawerDetails from "../Pages/LawerDetails/LawerDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";







  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            index: true,
            Component: Home
        },
        {
            path:'booking',
            element: <Booking></Booking>
        },
        {
          path: 'blogs',
          Component: Blogs
        },
        
        {
          path: 'lawer/:id',
          Component: LawerDetails,
         
        }
      ]
    },
  ]);