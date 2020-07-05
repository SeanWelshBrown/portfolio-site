import React from "react"

// components
import Layout from "../components/layout"
import Content from "../components/content-div"

// images
import SeanThailand from "../images/sean/sean-thailand.jpg"
import SeanVO from "../images/sean/sean-vo.jpeg"
import SeanVR from "../images/sean/sean-vr.jpg"
import SeanRiley from "../images/sean/sean-riley.jpg"
import SeanElephant from "../images/sean/sean-elephant.jpg"

// styles
import styles from "../pages/about.module.css"


export default function Home() {
  return (
    <Layout>
      
      <Content>

        {/* <div className={styles.imgCarousel}>
          <img src={SeanThailand} /> 
          <img src={SeanVO} /> 
          <img src={SeanVR} /> 
          <img src={SeanRiley} /> 
          <img src={SeanElephant} /> 
        </div> */}

        <img
          src={SeanThailand} alt="Me at an art museum in Thailand"
          style={{ 
            borderRadius: `50%`, 
            width: `300px`,
            // border: `3px solid black` ,
            boxShadow: `0 0 8px 2px` }}/> 

        <h2>About me <span role="img" aria-label="Lightbulb Emoji">💡</span></h2>

        <p>A native born New Yorker by way of Manhattan, once New Jerseyan, now Brooklynite. You could say I like the pizza here enough to stick around.</p>

        <p>I've had a passion for technology and all things nerdy since I was first old enough to hold a Game Boy and tinker with my father's MS-DOS work laptop, and that love of software and circuits has been the core of my identity ever since.</p>

        <p>I've also maintained a love for the arts and humanities thanks to wonderful parents who took me to museums, plays, and everything in-between while growing up. I loved it so much that I acquired a <strong>BFA</strong> from <strong>NYU</strong> (with a <strong>Minor in Web Design and Applications</strong>), and have spent the past 10 years pursuing acting and voice-over professionally in NYC.</p>

        <p>As an actor and narrator I've worked with some amazing clients, such as <strong>Audible</strong>, <strong>Scholastic</strong>, <strong>Microsoft</strong>, <strong>HarperCollins</strong>, <strong>Avis</strong>, <strong>Nickelodeon</strong>, and many more.</p>

        {/* <p>My experiences in the performing arts have helped shape me in more ways than I could count, and have made <em>empathy</em>, <em>collaboration</em>, <em>compassion</em> and <em>diversity</em> into core apects of how I approach the world.</p> */}

        <p>Once I knew I was ready for a change, I decided that it was time to pursue my other lifelong love of technology and software. I decided to attend <strong>Flatiron School</strong> for their <strong>Software Engineering</strong> program, spending an incredible 15 weeks learning everything I possibly could about modern web design and development.</p>

        <p>I've discovered an even deeper passion for programming and software development than ever before, and am ready to chase my dream of bringing the arts, humanities, technology, and compassion together to make a difference in the world.</p>

        <br />

      </Content>

    </Layout>
  )
}
