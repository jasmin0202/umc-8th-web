import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import HomeLayout from './layouts/HomeLayout';
import SignupPage from './pages/SignupPage';
import Mypage from './pages/MyPage';
import ProtectedLayout from './layouts/ProtectedLayout';
import GoogleLoginRedirectPage from './pages/GoogleLoginRedirectPage';
import { Query, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context/AuthContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from './queryClient';

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {index: true, element: <HomePage/>},
      {path: 'login', element: <LoginPage />},
      {path: 'signup', element: <SignupPage />},
      {path: "/v1/auth/google/callback", element: <GoogleLoginRedirectPage/>},
    ]
  }
];

const protectedRoutes : RouteObject[] = [
  {
    path: "/",
    element: <ProtectedLayout/>,
    errorElement: <NotFoundPage/>,
    children: [
      {
        path: 'mypage',
        element: <Mypage />
      },
    ]
  }
]
const router = createBrowserRouter([...publicRoutes, ...protectedRoutes
])

function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router = {router} />
    </AuthProvider>
    {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false}/>}
  </QueryClientProvider>
  )
  
}

export default App
