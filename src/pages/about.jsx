import React from 'react'
import Layout from '../components/Layout'
function About() {
  return (
    <Layout>
      <h5 className='mb-3'>About Me</h5>
      <p>My name is Abdullah. I'm a Web Developer at <a className='link' href='https://www.wunderkind.co' target="_blank">Wunderkind.</a> I built this blog to use as a portfolio / place to write about my interests.</p>
      <p>Palestinian by origin; I was born and raised in Jordan til I was 5, when my family decided to move to Dubai for a few years. I spent some formative years then returned to Jordan for the rest of my adolescent and teen years. When I was 18, I came to the Bay Area to pursue my education. I graduated from <a className='link' href='https://www.sjsu.ed'>San Jose State University</a> with a degree in Management Information Systems.</p> 
      <p>My journey with Web Development started in my last year of college. I was visiting my brother in Montreal and experiencing some angst about what career I should pursue. I had taken some programming courses throughout my degree and thought it was interesting to solve problems with code, but didn't really give it more time. I thought I'd seriously try it out and started learning alongside my degree. I found the <a className='link' href='https://www.youtube.com/@TraversyMedia'>Traversy Media</a> YouTube Channel that specializes in programming and technical education. I learned the fundamentals and built projects along with the tutorials and enjoyed the process of building things on the web.</p>

      <p>After about a year or so, I got an internship for a small advertising agency in LA. I worked with <a className='link' href='https://www.creativedigitalagency.com/' target="_blank">CDA</a>  for a little over a year, before joining Wunderkind in September 2022.</p>
      <p>I have truly enjoyed web development ever since and making it my career choice was once of the best decisions I made. There's always more to learn and ways to improve your skillset.</p>
      <p>In my free time, you can find me working out, reading, meditating, or playing the didgeridoo.</p>
    </Layout>
  )
}

// Name, where you're based, where you're from, college, spent last 8 years in baym then moved to LA
// talk about fitness, meditation, reading, didgeridoo

export default About

export const Head = () => <title>About | Abdullah Odeh</title>
