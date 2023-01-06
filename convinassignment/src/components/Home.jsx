import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='Home'>
             <div className="home-text">
                 <h2>Hi, To generate list of users click on the button !</h2>
             </div>
             <Link to="/users">
             <button>Click Me</button>
             </Link>
         </div>
  )
}

export default Home