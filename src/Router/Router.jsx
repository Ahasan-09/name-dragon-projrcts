import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";
import Register from "../Pages/Register";
import DetailsPage from "../Pages/DetailsPage";
import PrivateRout from "./PrivateRout";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [
        { 
            path: "/",
            element: <Home></Home>,
            loader : ()=> fetch('/news.json'),
        },
        {
          path: "/news/:id",
          element: <PrivateRout><DetailsPage></DetailsPage></PrivateRout> ,

        },
        {
            path: "/login",
            element: <LoginPage></LoginPage>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        }
      ]
    },
  ]);

  export default router ;