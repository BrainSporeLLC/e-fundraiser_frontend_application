import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom';

export const loader = async (param) => {
    return param.programId;
    // const dummyDanotions = [
    //   {
    //     name: "Middle Children",
    //     desc: "lorem ipsum dolor sit amet, consectetur adip",
    //     id: 1
    //   },
    //   {
    //     name: "Middle Children",
    //     desc: "lorem ipsum dolor sit amet, consectetur adip",
    //     id: 2
    //   },
    //   {
    //     name: "Middle Children",
    //     desc: "lorem ipsum dolor sit amet, consectetur adip",
    //     id: 3
    //   }
    // ];
    // return dummyDanotions.find(dummy => dummy.id === id);
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