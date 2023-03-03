import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'

export const loader = async({params}) => {
  const programId = params.programId;
  return programId;
}

const SingleProgram = () => {
  const program = useLoaderData();
  return (
    <div>
      Single program appears here
      <h1>{program}</h1>
    </div>
  )
}

export default SingleProgram