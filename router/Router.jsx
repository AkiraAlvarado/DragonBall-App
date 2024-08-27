import Planets from "../src/Components/pages/Planets";
import Characters from "../src/Components/pages/Characters";
import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import Page404 from "../src/Components/pages/Page404";
const Router = createBrowserRouter([
   {
     path: "/",
     element: <App/>,
     errorElement: <Page404/>,
     children: [
       {
         index: true,
         element: <Characters />
       },
       {
         path: "/Planets",
         element: <Planets/>
       }

     ]
   }
 ]);
 
 export default Router;