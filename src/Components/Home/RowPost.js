import axios from 'axios'
import React, {useEffect, useState} from 'react'
import './RowPost.css'
const RowPost = () => {
  const [color, setColor] = useState([false])
  const [state, setState] = useState([])
  useEffect(()=> {
 const fetchUsers = async()=> {
const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_BOOK_API_KEY}`)
console.log(response.data.results.books); 
setState(response.data.results.books);
}
fetchUsers();
  }, [])

  const changeColor =()=> {
    if(window.scrollY >=100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)
  return (
    <div className="rowpost">
     <div className="banner">
       <h2 className={color ? 'banner-text banner-text-cl' : 'banner-text'}>This is our book collection buy now..!!</h2>
        </div>      
 <div className="row">
       {
         state.map(details => 
    <div className="card">
            <img className="card-image" src={details.book_image} alt="title" />
            <h3 className="card-title">{details.title}</h3>
            <p className="card-des">{details.author}</p>
            <a className="view" href="/">VIEW MORE</a>
           
           </div>

        
            )}
         </div>
   </div>
     
  )
}

export default RowPost