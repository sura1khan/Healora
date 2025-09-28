import {createBrowserRouter} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";

   export const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children:[
        {
            index:true,
            Component:Home,
        },]
    
    },
  ]);