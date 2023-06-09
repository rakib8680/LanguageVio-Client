import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../layouts/DashBoard";
import Main from "../layouts/Main";
import Classes from "../pages/Classes/Classes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import LoginLayout from "../pages/LogIn&LogOut/LoginLayout";
import Register from "../pages/LogIn&LogOut/Register";
import PrivateRoute from "./PrivateRoute";






export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'instructors',
                element: <Instructors />,
                loader: () => fetch('/instructors.json')
            },
            {
                path: 'classes',
                element: <Classes />,
                loader: () => fetch('/classes.json')
            },
            {
                path: 'login',
                element: <LoginLayout />
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element:
            <PrivateRoute>
                <DashBoard />
            </PrivateRoute>,
        children: [
            {

            }
        ]
    }
])
