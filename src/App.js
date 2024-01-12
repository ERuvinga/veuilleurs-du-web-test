import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import MainPage from './pages/main';
import FormPage from './pages/form';
import ErrorPage from './pages/Error';

const App = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <FormPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/main',
            element: <MainPage />,
        },
    ]);

    return <RouterProvider router={appRouter} />;
};

export default App;
