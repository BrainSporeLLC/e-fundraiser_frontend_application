import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'

export  const loader = async() => {
  const dummyDanotions = [
    {
      name: 'Middle Children',
      desc: 'lorem ipsum dolor sit amet, consectetur adip',
      id: 1
    },
    {
      name: 'Middle Children',
      desc: 'lorem ipsum dolor sit amet, consectetur adip',
      id: 1
    },
    {
      name: 'Middle Children',
      desc: 'lorem ipsum dolor sit amet, consectetur adip',
      id: 1
    }
  ]
  return dummyDanotions;
}

const  Programs = () => {
  const programs = useLoaderData();
  console.log(programs)
  return (
    <div>
      {
        programs.map(program =>{
          return (
            <div>
              <h3>{}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default Programs