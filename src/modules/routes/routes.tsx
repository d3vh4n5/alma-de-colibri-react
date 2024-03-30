import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { Home } from "../../pages/Home";
import { Test } from "../../pages/Test";
import NotFound from "../../pages/NotFound";
import About from "../../pages/About";
import Contact from "../../pages/Contact";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            // Basic Routes
            { path: '', element: <Home /> },
            { path: 'test', element: <Test /> },
            { path: '*', element: <NotFound /> },
            // Generic routes
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
        ],
    }
])