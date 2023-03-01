import React from 'react'

export const loader = async () => {
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
    return dummyDanotions;
  };

const SingleProgram = () => {
  return (
    <div>SingleProgram</div>
  )
}

export default SingleProgram