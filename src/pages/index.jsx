import * as React from "react"
import Layout from "../components/Layout"
const Home = () => {
  return (
    <Layout>
        <h5 className="mb-3">Hello! My name is</h5>
        <h1 className="mb-3 bold uppercase">Abdullah Odeh.</h1>
        <h5 className="mb-3">I'm a Web Developer based in Los Angeles, CA.</h5>
        <button className="main-btn">Connect</button>
    </Layout>
  )
}

export default Home

export const Head = () => <title>Home | Abdullah Odeh</title>
