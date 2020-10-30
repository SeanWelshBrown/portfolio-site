import React from "react"

// components
import Layout from "../components/layout"
import Content from "../components/content-div"

// images
import ResumePDF from "../images/Sean_Welsh_Brown_RESUME.pdf"

export default function Resume() {
  return (
    <Layout>
      <Content>
        <object
          data={ResumePDF}
          type="application/pdf"
          aria-label="Sean Welsh Brown Software Engineering Resume"
          style={{ height: `75vh`, width: `100%` }}
        ></object>

        <a href={ResumePDF} download="Sean Welsh Brown - Software Engineer - Resume">
          Download as a PDF
        </a>
      </Content>
    </Layout>
  )
}
