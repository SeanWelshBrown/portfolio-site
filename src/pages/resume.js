import React from "react"

// components
import Layout from "../components/layout"
import Content from "../components/content-div"

// images
import ResumePDF from "../images/seanwelshbrown-resume.pdf"


export default function Resume() {
  return (
    <Layout>

      <Content>

        <object data={ResumePDF} type="application/pdf" style={{ height: `75vh`, width: `100%` }}></object>
        
      </Content>

    </Layout>
  )
}
