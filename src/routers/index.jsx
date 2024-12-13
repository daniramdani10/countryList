import { createBrowserRouter } from "react-router-dom";
import ListCountries from "../pages/ListCountries";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ListCountries />,
    },
]);