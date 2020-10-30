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
          src={SeanHeadshot}
          alt="professional headshot"
          style={{
            borderRadius: `50%`,
            width: `300px`,
            boxShadow: `0 0 8px 2px`,
          }}
        />

        <h2>
          Hi there,{" "}
          <span role="img" aria-label="Hand Waving Emoji">
            👋
          </span>
        </h2>

        <p>
          I'm Sean, a full-stack Web Developer and Software Engineer based in
          New Jersey and New York City.
        </p>

        <p>
          I'm experienced in:{" "}
          <b>JavaScript, React, Redux, Gatsby, Ruby on Rails, HTML and CSS</b>,
          with an understanding of{" "}
          <b>SQL, PostgreSQL, and RESTful database and API structures.</b>
        </p>

        <p>
          I'm currently working to add <b>Node.JS, Express, MongoDB</b> and
          other new technologies to my skills.
        </p>

        <p>
          With a background in the performing arts, I'm driven by a lifelong
          passion to combine technology, software, humanity and art to create
          clean code and improve the lives of others.
        </p>

        <p>
          Click the links at the top of the page to learn more about me, to see
          my projects and resume, or to contact me directly!
        </p>

        <ContactList />
      </Content>
    </Layout>
  )
}
