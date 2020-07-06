import React from "react"

// components
import Layout from "../components/layout"
import Content from "../components/content-div"
import ContactList from "../components/contact-list"
import ContactForm from "../components/contact-form"


export default function Contact() {
  return (
    <Layout>
      
      <Content>

        <h5>Connect with me on LinkedIn and GitHub, or through my blogs on Medium and Dev:</h5>

        <ContactList />

        <h5>Or contact me directly using the form below!</h5>

        <ContactForm />

      </Content>

    </Layout>
  )
}
