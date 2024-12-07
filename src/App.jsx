// import React from 'react'

import About from "./componants/AboutPage/About";
import Home from "./componants/HomePage/Home";
import Layout from "./componants/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Service from "./componants/ServicePage/Service";
import Contact from "./componants/ContactPage/Contact";
import Login from "./componants/LoginPage/Login";

export default function App() {
  const Routing = createBrowserRouter([
    {
      path: "",element: <Login />
    },
    {
      path: "home",
      element: <Layout />,
      // parent
      // this is welcome bage
      children: [
        {index:true,element: <Home />},
        {path: "about",element: <About />},
        {path: "service",element: <Service />},
        {path: "contact_us",element: <Contact />,
          children:[
            {path:"" , element:<h1>welcome to form page</h1>},
            {path:"location" , element:<h1>welcome to location page</h1>},
            {path:"email" , element:<h1>welcome to email page</h1>},
            {path:"phone" , element:<h1>welcome to phone page</h1>},
          ]
        },
        
        { path: "*", element: <section><h2>404 Not Found</h2></section> },
      ],
    }
  ]);
  return (
    <>
      <RouterProvider router={Routing} />
    </>
  );
}
