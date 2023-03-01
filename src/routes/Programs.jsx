import React from 'react'
import { NavLink } from 'react-router-dom'

const  Programs = () => {
  return (
    <div>
      <h1 className="heading__primary">
        <span>We are your best online</span>
        <span>fundraising partners</span>
      </h1>
      <blockquote cite="https://www.bucknerkenya.org/blessed-is-the-hand-that-giveth/#:~:text=Acts%2020%3A35%20%E2%80%9CIn%20everything,to%20give%20than%20to%20receive.%E2%80%9D">
        <span className="openning-quote">&#8220;</span>A hand that giveth is the
        hand that receiveth
        <span className="closing-quote">&#8221;</span>
      </blockquote>
      <cite>Bible, Act 20:35</cite>
      <NavLink className="btn center" to="/donate">
        donate
      </NavLink>
      
    </div>
  )
}

export default Programs