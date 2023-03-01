import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

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

const Programs = () => {
  const programs = useLoaderData();
  return (
    <div>
      {programs.map(({ name, desc, id }) => {
        return (
          <NavLink to={`/programs/${id}`} key={id}>
              <h3>{name}</h3>
              <p>{desc}</p>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Programs;
