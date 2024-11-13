import Layout from "./Layout";
import Home from "./Home";
import ErrorPage from "../error-page";
import Shop from "./Shop";

const routes = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "shop",
                element: <Shop />
            }
        ]
    }
];

export default routes;