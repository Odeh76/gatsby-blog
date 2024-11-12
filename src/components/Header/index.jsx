import { Link } from 'gatsby'
import React from 'react'
import './styles.scss'

function Header() {
  return (
    <nav className='nav'>
      <ul className='flex justify-between align-center'>
        <div>
          <li><Link className='nav-link' to='/'>Home</Link></li>
        </div>
        <div className='flex'>
          <li><Link className='nav-link mr-1' to='/about'>About</Link></li>
          {/* <li><Link className='nav-link' to='/blog'>Blog</Link></li> */}
          {/* <li><a className='nav-link' to='/blog'>Resume</a></li> */}
        </div>
      </ul>
    </nav>
  )
}

export default Header