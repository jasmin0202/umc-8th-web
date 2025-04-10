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

//import HomePage from './pages/home'
import HomePage from './pages/home'
import MoviePage from './pages/movies'
import Notfound from './pages/not-found'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <Notfound />
  },
  {
    path: '/movies',
    element: <MoviePage />
  }
  
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}
export default App
