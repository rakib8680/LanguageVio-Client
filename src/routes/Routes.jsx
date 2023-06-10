import { createBrowserRouter } from "react-router-dom";
import ManageClasses from "../components/admin/ManageClasses";
import ManageUsers from "../components/admin/ManageUsers";
import AddClass from "../components/DashBoard/instructor/AddClass";
import MyClasses from "../components/DashBoard/instructor/MyClasses";
import SelectedClasses from "../components/DashBoard/selected classes/SelectedClasses";
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
                path: 'selectedClasses',
                element: <SelectedClasses />
            },
            {
                path: 'addClass',
                element: <AddClass />
            },
            {
                path: 'myClasses',
                element:
                    <PrivateRoute>
                        <MyClasses />
                    </PrivateRoute>
            },
            {
                path: 'manageClasses',
                element: <PrivateRoute> <ManageClasses /> </PrivateRoute>
            },
            {
                path: 'manageUsers',
                element: <PrivateRoute> <ManageUsers /> </PrivateRoute>
            }
        ]
    }
])
