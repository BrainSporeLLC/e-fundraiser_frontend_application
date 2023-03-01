import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom';

export const loader = async (params) => {
    
  };

const SingleProgram = () => {
  const programs = useLoaderData();
  console.log("programs");
  return (
    <div>
      Single program appears here
    </div>
  )
}

export default SingleProgram