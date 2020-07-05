import React from "react"

// components
import Layout from "../components/layout"
import Content from "../components/content-div"

// images
import SeanHeadshot from "../images/sean/sean-headshot.jpg"
import LinkedInMark from "../images/logos/linkedin-mark.png"
import GitHubMark from "../images/logos/github-mark.png"
import MediumMark from "../images/logos/medium-mark.png"
import DevToMark from "../images/logos/devto-mark.svg"


// image links to social media, abstracted as separate components to keep the body JSX more readable
const LinkedInLink = () => {
  return (
    <a href="https://www.linkedin.com/in/seanwelshbrown/" target="_blank" rel="noreferrer">
      <img src={LinkedInMark} alt="LinkedIn Logo" style={{ height: `54px` }} />
    </a>
  )
}
const GitHubLink = () => {
  return (
    <a href="https://github.com/SeanWelshBrown" target="_blank" rel="noreferrer">
      <img src={GitHubMark} alt="GitHub Logo" style={{ height: `54px`, paddingRight: `10px` }} />
    </a>
  )
}
const MediumLink = () => {
  return (
    <a href="https://medium.com/@seanwelshbrown" target="_blank" rel="noreferrer">
      <img src={MediumMark} alt="Medium Logo" style={{ height: `54px`, paddingRight: `10px` }} />
    </a>
  )
}
const DevToLink = () => {
  return (
    <a href="https://dev.to/seanwelshbrown" target="_blank" rel="noreferrer">
      <img src={DevToMark} alt="Dev.to Logo" style={{ height: `54px`, paddingRight: `10px` }} />
    </a>
  )
}


export default function Home() {
  return (
    <Layout>

      <Content>

        <img 
          src={SeanHeadshot} alt="professional headshot" 
          style={{ 
            borderRadius: `50%`, 
            width: `300px`,
            // border: `3px solid black`,
            boxShadow: `0 0 8px 2px` }}
        />

        <h2>Hi there, <span role="img" aria-label="Hand Waving Emoji">👋</span></h2>

        <p>I'm Sean, a full-stack web developer based in Brooklyn, NY.</p>

        <p>I'm experienced in: <strong>JavaScript, React, Ruby, Rails, HTML and CSS</strong>, with an understanding of <strong>SQL, PostgreSQL, and RESTful</strong> database and API structures.</p>

        <p>With a background in the performing arts, I'm driven by a lifelong passion to combine technology, software, humanity and art to create clean code and improve the lives of others.</p>

        <p>Click the links at the top of the page to learn more about me, to see my projects, resume and blog posts, or to contact me directly!</p>

        <ul>
          {LinkedInLink()}
          {GitHubLink()}
          {MediumLink()}
          {DevToLink()}
        </ul>

      </Content>

    </Layout>
  )
}