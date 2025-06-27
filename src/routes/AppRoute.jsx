import React, { Suspense } from 'react';
import PageLoader from '@/components/PageLoader';
import AppLayout from '@/layouts/AppLayout';
import FormLayout from '@/layouts/FormLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const withLoading = (Component) => {
  return props => (
    <Suspense fallback={<PageLoader />}>
      <Component {...props} />
    </Suspense>
  )
};

const Login = withLoading(React.lazy(() => import('@/pages/Login')));
const Dashboard = withLoading(React.lazy(() => import('@/pages/Dashboard')));
const User = withLoading(React.lazy(() => import('@/pages/User')));

const publicRouter = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <AppLayout />,
        children: [
          { path: '/', element: <Dashboard /> },
          { path: '/demo', element: <Dashboard /> },
          { path: '/demo/hello', element: <Dashboard /> },
          { path: '/demo/hello/world', element: <Dashboard /> },
          { path: '/users', element: <User /> },
        ]
      },
      {
        path: '/auth',
        element: <FormLayout />,
        children: [
          {
            path: '/auth/login',
            element: <Login />
          }
        ]
      },
    ]
  }
])

// const Dashboard = withLoading(React.lazy(() => import('pages/Dashboard')));
// const Home = withLoading(React.lazy(() => import('@/pages/Home')));

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <AppLayout />,
//     children: [
//       {
//         path: '/',
//         // element: <Home />,
//       }
//     ]
//   }
// ])

const AppRoute = () => {
  return (
    <RouterProvider router={publicRouter} />
  )
}

export default AppRoute