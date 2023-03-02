import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'

export const loader = async(params) => {
  const programId = params.programId;
  return programId;
}

const SingleProgram = () => {
  return (
    <div>
      Single program appears here
    </div>
  )
}

export default SingleProgram