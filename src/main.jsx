import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/app.css'
import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements 
} from 'react-router-dom'
import ErrorElementPAge from './pages/ErrorElementPAge'
import RaiseFunds from './routes/RaiseFunds'
import Testimonies from './routes/Testimonies'
import Reads from './routes/Reads'
import Login from './routes/Login'

const app = createBrowserRouter(
  createRoutesFromElements(
    <Route 
    path='/'
    element={<App/>}
    errorElement={<ErrorElementPAge/>}
    >
      <Route
      element={<RaiseFunds/>}
      path='raisefunds'
      />
      <Route
      element={<Testimonies/>}
      path='testimonies'
      />
      <Route
      
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={app}/>
  </React.StrictMode>,
)
