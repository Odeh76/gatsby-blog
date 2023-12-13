import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import '../../styles/main.scss'

function Layout({children}) {
  return (
    <main className='main-layout'>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Layout