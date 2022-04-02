import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import RowPost from './RowPost'
const HomePage = () => {
  


  return (
    <div className="home">
        <div className="navbar">
            <div className="heading">
            <h1 className="brand">Book Maniac</h1>
            </div>
           <div className="about">
           <Link to="/about" className="about-link" >About Us</Link>
           </div>
        </div>
        <RowPost/>
    </div>
  )
}

export default HomePage