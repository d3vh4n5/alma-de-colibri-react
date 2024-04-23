import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Login from "../sessions/pages/Login";
import allImports, { type LazyItem } from "./LazyLoading";
import { SESSION_ROUTES } from "../sessions/sessions.routes";

const routes = allImports.map((item: LazyItem) => (
    { path: `${item.path}`, element: <item.component /> }
))

const sessionRoutes = SESSION_ROUTES.map((item: LazyItem) => (
    { path: `${item.path}`, element: <item.component /> }
))

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            ...routes
        ],
    },
    {
        path: "/auth",
        element: <Login />,
        children: [
            ...sessionRoutes
        ],
    }
])