import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Classes from "../pages/Classes/Classes";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";






export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'instructors',
                element: <Instructors />
            },
            {
                path: 'classes',
                element: <Classes />
            }
        ]
    }
])
