import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from 'gatsby-plugin-image';

const Home = () => {
  return (
    <>
       <StaticImage
      src="../images/optimized_image.png" // Replace with your image path
      alt="Description of image"
      placeholder="blurred" // Optional: "tracedSVG", "dominantColor", "none"
      layout="constrained" // Optional: "fixed", "fullWidth"
      style={{
        position: 'absolute',
        zIndex: '-1',
        width: '100%',
        height: '100%',
        objectFit: 'cover',         // Ensures the image covers the container
        objectPosition: 'center',   // Centers the image within the container
        borderRadius: '8px',        // Adds subtle rounded corners (optional)
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Soft shadow for depth
        transition: 'transform 0.3s ease-in-out',   // Smooth zoom effect (optional)
      }}
      />
    <Layout>
        <h5 className="mb-3">Hello! My name is</h5>
        <h1 className="mb-3 bold uppercase">Abdullah Odeh.</h1>
        <h5 className="mb-3">I'm a Web Developer based in Los Angeles, CA.</h5>
        <a href="mailto:abdullahsayshello@gmail.com" target="_blank" className="main-btn">Connect</a>
    </Layout>
      </>
  )
}

export default Home

export const Head = () => <title>Home | Abdullah Odeh</title>
