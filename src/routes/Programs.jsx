import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

export const loader = async () => {
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
  return dummyDanotions;
};

const Programs = () => {
  const programs = useLoaderData();
  return (
    <div>
      {programs.map(({ name, desc, img, id }) => {
        return (
          <NavLink to={`/programs/${id}`} key={id}>
              <h3>{name}</h3>
              <img src={img} alt="" srcset="" />
              <p>{desc}</p>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Programs;
