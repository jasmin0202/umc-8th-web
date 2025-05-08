
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 76ed070e172670944556d0da4a15e2a022f12383
import HomePage from './pages/home'
import MoviePage from './pages/movies'
import Notfound from './pages/not-found'
import RootLayout from './layout/root-layout'
import { useEffect } from 'react'

<<<<<<< HEAD
=======
//import HomePage from './pages/home'
import HomePage from './pages/home'
import MoviePage from './pages/movies'
import Notfound from './pages/not-found'
>>>>>>> b5f50e2b4b73d352c33c3ba23a942e4dba5ae229

=======
>>>>>>> 76ed070e172670944556d0da4a15e2a022f12383
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
<<<<<<< HEAD
    <RouterProvider router={router}/>
=======
    <RouterProvider router={router} />
>>>>>>> b5f50e2b4b73d352c33c3ba23a942e4dba5ae229
=======
    <RouterProvider router={router} />
>>>>>>> 76ed070e172670944556d0da4a15e2a022f12383
  )
}
export default App
