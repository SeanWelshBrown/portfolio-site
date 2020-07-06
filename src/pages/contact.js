import React from "react"

// components
import Layout from "../components/layout"
import Content from "../components/content-div"
import ContactList from "../components/contact-list"


export default function Contact() {
  return (
    <Layout>
      
      <Content>

        <h5>Connect with me on LinkedIn and GitHub, or through my blogs on Medium and Dev:</h5>

        <ContactList />

        <h5>Or contact me by email:</h5>

        <p><strong>seanwelshbrown@gmail.com</strong></p>

        <a href="mailto:seanwelshbrown@gmail.com">(Click to open email app directly)</a>

      </Content>

    </Layout>
  )
}
