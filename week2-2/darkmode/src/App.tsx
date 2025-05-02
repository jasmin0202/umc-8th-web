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
//import HomePage from './pages/home'
import HomePage from './pages/home'
import MoviePage from './pages/movies'
import Notfound from './pages/not-found'
=======

import HomePage from './pages/home'
import MoviePage from './pages/movies'
import Notfound from './pages/not-found'
import RootLayout from './layout/root-layout'
import { useEffect } from 'react'

>>>>>>> 8aa85a1ad6ec53662dec6c3902f451304528b36a

const router = createBrowserRouter([
  {
    path: '/',
<<<<<<< HEAD
    element: <HomePage />,
    errorElement: <Notfound />
  },
  {
    path: '/movies',
    element: <MoviePage />
  }
  
=======
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
>>>>>>> 8aa85a1ad6ec53662dec6c3902f451304528b36a
])

function App() {
  return (
<<<<<<< HEAD
    <RouterProvider router={router} />
=======
    <RouterProvider router={router}/>
>>>>>>> 8aa85a1ad6ec53662dec6c3902f451304528b36a
  )
}
export default App
