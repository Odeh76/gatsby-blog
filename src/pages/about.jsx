import React from 'react'
import Layout from '../components/Layout'
function About() {
  return (
    <Layout>
      <h5 className='mb-3'>About Me</h5>
      <p>My name is Abdullah. I'm a Web Developer at <a className='link' href='https://www.wunderkind.co' target="_blank">Wunderkind.</a> I built this blog to use as a portfolio / place to write about my interests.</p>
      <p>My journey with Web Development started in 2019</p>
      <p>I managed to get an internship for a small agency in LA. I worked with CDA for almost two years, before joining Wunderkind in September 2022.</p>
    </Layout>
  )
}

export default About

export const Head = () => <title>About | Abdullah Odeh</title>
