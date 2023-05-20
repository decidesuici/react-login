// Router procedures
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'

// Import elements
import Login from './public/auth/Login';
import Home from './public/Home';

const router = createBrowserRouter([
    {
        path: '/home',
        element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    }
]);

function AppRouter(){
    return(
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default AppRouter