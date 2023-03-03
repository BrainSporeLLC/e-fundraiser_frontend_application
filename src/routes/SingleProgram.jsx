import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'

export const loader = async({params}) => {
  const programId = params.programId;
  const dummyDanotions = [
    {
      name: "Middle Children",
      desc: "lorem ipsum dolor sit amet, consectetur adip",
      id: 1
    },
    {
      name: "Middle Children",
      desc: "lorem ipsum dolor sit amet, consectetur adip",
      id: 2
    },
    {
      name: "Middle Children",
      desc: "lorem ipsum dolor sit amet, consectetur adip",
      id: 3
    }
  ];
  const selectedDonation = dummyDanotions.filter((program) => {
    return program.id === programId;
  })
  return selectedDonation;
}

const SingleProgram = () => {
  const program = useLoaderData();
  console.log(program)
  return (
    <div>
      Single program appears here
      {/* <h1>{program}</h1> */}
    </div>
  )
}

export default SingleProgram