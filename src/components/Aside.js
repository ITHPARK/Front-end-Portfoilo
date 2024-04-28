import React from 'react'
import {Link} from 'react-router-dom'

const aside = () => {
  return (
    <div className='aside'>
        <ul>
            <li>
                <Link to="/">
                    About
                </Link>
            </li>
            <li>
                <Link to="project">
                    Project
                </Link>    
            </li>
            <li>
                <Link to="contact">
                    contact
                </Link>    
            </li>
        </ul>
    </div>
  )
}

export default aside