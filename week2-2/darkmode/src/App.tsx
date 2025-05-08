/* import React from 'react'
import './App.css'
import ContextPage from './06-useContext/ContextPage'

function App() {

  return (
    <>
      <ContextPage />
    </>
  )
}

export default App */

import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom' 

<<<<<<< HEAD

import HomePage from './pages/home'
import MoviePage from './pages/movies'
import Notfound from './pages/not-found'
import RootLayout from './layout/root-layout'
import { useEffect } from 'react'

=======
//import HomePage from './pages/home'
import HomePage from './pages/home'
import MoviePage from './pages/movies'
import Notfound from './pages/not-found'
>>>>>>> b5f50e2b4b73d352c33c3ba23a942e4dba5ae229

const router = createBrowserRouter([
  {
    path: '/',
<<<<<<< HEAD
    // element: <HomePage />,
    element: <RootLayout />,
    errorElement: <Notfound />,
    children :[
      {
        //index가 true면 홈 경로를 의미
        index: true,
        element: <HomePage />
      },
      {
        path: 'movies/:movieId',
        element: <MoviePage />
      }
    ]
  },
=======
    element: <HomePage />,
    errorElement: <Notfound />
  },
  {
    path: '/movies',
    element: <MoviePage />
  }
  
>>>>>>> b5f50e2b4b73d352c33c3ba23a942e4dba5ae229
])

function App() {
  return (
<<<<<<< HEAD
    <RouterProvider router={router}/>
=======
    <RouterProvider router={router} />
>>>>>>> b5f50e2b4b73d352c33c3ba23a942e4dba5ae229
  )
}
export default App
