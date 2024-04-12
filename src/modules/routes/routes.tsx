import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import allImports, { type LazyItem } from "./LazyLoading";

const routes = allImports.map((item: LazyItem) => (
    { path: `${item.path}`, element: <item.component /> }
))

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            ...routes
        ],
    }
])