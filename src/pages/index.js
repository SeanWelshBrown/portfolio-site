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
          I'm Sean, a full-stack Software Developer based in New Jersey and New
          York City.
        </p>

        <p>
          I currently work on the dev team at <em>Genesis Research</em>, a real world evidence and health economics and outcomes research company in Hoboken, NJ.
        </p>

        <p>
          I'm heavily experienced in the front end world of: <b>JavaScript, React, and HTML/CSS</b>,
          with a growing proficiency in <b>Python, Django, SQL,</b> and DevOps technologies like <b>Docker and AWS.</b>
        </p>

        <p>
          With a background in the performing arts, I'm driven by a lifelong passion to combine
          technology, software, humanity and art to create clean code and improve the lives of
          others.
        </p>

        <ContactList />
      </Content>
    </Layout>
  )
}
