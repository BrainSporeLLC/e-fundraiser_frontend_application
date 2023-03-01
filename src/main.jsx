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
import RaiseFunds from './routes/RaiseFunds'
import Programs from './routes/Programs'
import Reads from './routes/Reads'
import Login from './routes/Login'
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
      path='programs'
      />
      <Route
      element={<RaiseFunds/>}
      path='raisefunds'
      />
      <Route
      element={<Reads/>}
      path='about_us'
      />
      <Route
      element={<Login/>}
      path='login'
      />
      <Route
      element={<Donate/>}
      path='donate'
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={app}/>
  </React.StrictMode>,
)
