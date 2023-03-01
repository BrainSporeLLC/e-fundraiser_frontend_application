import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/sass/main.scss'
import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements 
} from 'react-router-dom'
import ErrorElementPAge from './pages/ErrorElementPAge'
import Programs, {
  loader as programsLoader
} from './routes/Programs'
import SingleProgram from './routes/SingleProgram'
import Reads from './routes/Reads'
import Homepage from './pages/Homepage'
import Donate from './routes/Donate'

const app = createBrowserRouter(
  createRoutesFromElements(
    <Route 
    path='/'
    element={<App/>}
    errorElement={<ErrorElementPAge/>}
    >
      <Route 
      element={<Homepage />}
      index
      />
      <Route
      element={<Programs/>}
      loader={programsLoader}
      path='programs'
      />
      <Route
      element={<SingleProgram/>}
      path='programs/:programId'
      />
      <Route
      element={<Reads/>}
      path='about_us'
      />
      <Route
      element={<Donate/>}
      path='/donate'
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={app}/>
  </React.StrictMode>,
)
