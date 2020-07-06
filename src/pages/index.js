import React from "react"

// components
import Layout from "../components/layout"
import Content from "../components/content-div"
import ContactList from "../components/contact-list"

// images
import SeanHeadshot from "../images/sean/sean-headshot.jpg"


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

        <p>Click the links at the top of the page to learn more about me, to see my projects and resume, or to contact me directly!</p>

        <ContactList />

      </Content>

    </Layout>
  )
}