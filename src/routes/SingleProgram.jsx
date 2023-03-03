import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'

export const loader = async({params}) => {
  const programId = params.programId;
  const dummyDanotions = [
    {
      name: "Middle Children",
      desc: "lorem ipsum dolor sit amet, consectetur adip",
      img: "https://images.hivisasa.com/1200/zkAaq11LgUCapture.PNG",
      id: 1
    },
    {
      name: "Middle Children",
      desc: "lorem ipsum dolor sit amet, consectetur adip",
      img: "https://thumbs.dreamstime.com/b/girl-taking-donation-box-full-stuff-donate-little-72620722.jpg",
      id: 2
    },
    {
      name: "Middle Children",
      desc: "lorem ipsum dolor sit amet, consectetur adip",
      img: "https://c8.alamy.com/comp/2HNNAJK/volunteer-woman-give-food-donation-to-homeless-person-in-street-caring-girl-deliver-donate-charity-nutrition-eating-package-to-people-in-need-charit-2HNNAJK.jpg",
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
      <img src={program.img} alt="donation image" />
      <p>
        {program.desc}
      </p>
      <NavLink to={`/donate`}>Donate</NavLink>
    </div>
  )
}

export default SingleProgram