// Router procedures
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

// Import elements
import Login from './public/auth/Login'
import Signup from './public/auth/Signup'
import Recover from './public/auth/Recover'
import Home from './public/Home'
import NotFound from './public/NotFound'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/home"></Navigate>
    },
    {
        path: '/auth',
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'signup',
                Component: Signup
            },
            {
                path: 'recover-password',
                Component: Recover
            }
        ]
    },
    {
        path: '/home',
        Component: Home
    },
    {
        path: 'not-found',
        Component: NotFound
    },
    {
        path: '/*',
        element: <Navigate to='/not-found' replace></Navigate>
    },
]);

function AppRouter(){
    return(
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default AppRouter