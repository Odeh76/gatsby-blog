import { Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'

function Blog() {
  return (
    <Layout>
      <h5 className='mb-2'>Things I've written about:</h5>
      <div className="flex-col">
        <h6 className='mb-2'><Link className='blog-link' to='/blog/meditation'>Meditation</Link></h6>
      </div>
    </Layout>
  )
}

export default Blog

export const Head = () => <title>Blog | Abdullah Odeh</title>
