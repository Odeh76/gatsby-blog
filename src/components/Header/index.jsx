import { Link } from 'gatsby'
import React from 'react'
import './styles.scss'

function Header() {
  return (
    <nav className='nav'>
      <ul className='flex justify-between align-center'>
        <div>
          <li><Link className='link' to='/'>Home</Link></li>
        </div>
        <div className='flex'>
          <li><Link className='link mr-1' to='/about'>About</Link></li>
          <li><Link className='link' to='/blog'>Blog</Link></li>
        </div>
      </ul>
    </nav>
  )
}

export default Header