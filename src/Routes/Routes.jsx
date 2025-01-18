import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import Order from '../Pages/Order/Order';
import Login from '../Authentication/Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/food/order/:idMeal',
                element: <PrivateRoute><Order /></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    },
]);


export default Routes;