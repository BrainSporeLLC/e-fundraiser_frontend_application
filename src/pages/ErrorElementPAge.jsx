import React from 'react'
import { useRouteError } from 'react-router-dom'
const ErrorElementPAge = () => {
  const error = useRouteError ();
  return (
    <div>
        <h1>Error</h1>
        <p>We are regret to see you running into an error!</p>
        <p>{error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorElementPAge