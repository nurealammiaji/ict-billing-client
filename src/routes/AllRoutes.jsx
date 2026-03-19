import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Dish from './../pages/Dish/Dish';
import Internet from './../pages/Internet/Internet';
import Helpline from './../pages/Helpline/Helpline';
import Bills from './../pages/Bills/Bills';
import Search from './../pages/Search/Search';
import Settings from './../pages/Settings/Settings';

const AllRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/dish",
                element: <Dish />
            },
            {
                path: "/internet",
                element: <Internet />
            },
            {
                path: "/bills",
                element: <Bills />
            },
            {
                path: "/helpline",
                element: <Helpline />
            },
            {
                path: "/search",
                element: <Search />
            },
            {
                path: "/settings",
                element: <Settings />
            }
        ]
    }
]);

export default AllRoutes;