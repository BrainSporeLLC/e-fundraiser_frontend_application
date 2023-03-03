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
  const selectedDonation = dummyDanotions.find((p) => {
    return p.id === Number(programId);
  })
  return selectedDonation;
}

const SingleProgram = () => {
  const program = useLoaderData();
  return (
    <div key={program.id}>
      <h1>
        {program.name}
      </h1>
      <p>
        {program.desc}
      </p>
      <NavLink to={`/donate`}>Donate</NavLink>
    </div>
  )
}

export default SingleProgram