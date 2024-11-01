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
      </ul>
    </nav>
  )
}

export default Header