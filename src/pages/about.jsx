import React from 'react'
import Layout from '../components/Layout'
function About() {
  return (
    <Layout>
      <h5 className='mb-3'>About Me</h5>
      <p>My name is Abdullah. I'm a Web Developer at <a className='link' href='https://www.wunderkind.co' target="_blank">Wunderkind.</a> I built this blog to use as a portfolio / place to write about my interests. Most of what I write about here is just things I'm interested in, with a lot of things I've learned from other people.</p>
    </Layout>
  )
}

export default About

export const Head = () => <title>About | Abdullah Odeh</title>
