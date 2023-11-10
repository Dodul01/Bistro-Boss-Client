import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import Dashbord from "../Pages/Dashbord/Dashbord";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/ourMenu',
        element: <OurMenu />
      },
      {
        path: '/ourShop',
        element: <OurShop />
      },
      {
        path: '/dashbord',
        element: <Dashbord/>
      }
    ]
  }
]);

export default router;