import React from "react"
import Layout from "../components/layout"

import SeanPic1 from "../images/sean-pic-1.jpg"

export default function Home() {
  return (
    <Layout>

      <div style={{ textAlign: `center`, margin: `auto` }}>

        <img 
          src={SeanPic1} alt="headshot of me" 
          style={{ 
            borderRadius: 360, 
            width: 400, }}
        />

      </div>

    </Layout>
  )
}
