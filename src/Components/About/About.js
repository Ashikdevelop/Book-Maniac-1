import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
          <div className="aboutpage">
      <div className="about-title">
      <Link to="/"><h1 className="about-head">Book Maniac</h1> </Link>  
      </div>
      <div className="about-section">
        <h2 className="about-two">About Us</h2>
        <div className="about-desc">
          <p className="about-des">It is a long established fact that a reader
           will be distracted by the readable 
          content of a page when looking at its layout.
           The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed
            to using 'Content here, content here', 
          making it look like readable English
          . Many desktop publishing making it look like readable 
          to using 'Content here, content here', 
          making 
          
       </p>
        </div>
       
         
      </div>
    </div>
  )
}

export default About