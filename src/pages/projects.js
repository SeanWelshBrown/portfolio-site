import React from "react"

// components
import Layout from "../components/layout"
import Content from "../components/content-div"

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

// images
import Focus1 from "../images/projects/focus/focus-1.png"
// import Focus2 from "../images/projects/focus/focus-2.png"
// import Focus3 from "../images/projects/focus/focus-3.png"
// import Focus4 from "../images/projects/focus/focus-4.png"
// import Focus5 from "../images/projects/focus/focus-5.png"
// import Focus6 from "../images/projects/focus/focus-6.png"
import Fractal1 from "../images/projects/fractal/fractal-1.png"
import Portfolio1 from "../images/projects/portfolio/portfolio-1.png"
import Today1 from "../images/projects/today/today-1.png"
import Today2 from "../images/projects/today/today-2.png"

// styles
import styles from "./projects.module.css"


// const focusImages = [
//   {
//     original: `${Focus1}`
//   },
//   {
//     original: `${Focus2}`
//   },
//   {
//     original: `${Focus3}`
//   },
//   {
//     original: `${Focus4}`
//   },
//   {
//     original: `${Focus5}`
//   },
//   {
//     original: `${Focus6}`
//   },
// ]


export default function Home() {
  return (
    <Layout>

      <Content>

        {/* <ImageGallery 
          items={focusImages} 
          showPlayButton={false}
          showBullets={true}
          showThumbnails={false}
        /> */}

        {/* PROJECT 1 */}
        <img src={Focus1} className={styles.projectImg} />

        <h2><u>Focus</u></h2>

        <p className={styles.projectLink}><strong>Hosted:</strong> <a href="https://focus-timer.app/" target="_blank" rel="noreferrer">https://focus-timer.app/</a></p>

        <p><strong>GitHub:</strong> <a href="https://github.com/SeanWelshBrown/focus-frontend" target="_blank" rel="noreferrer">Front-end</a>/<a href="https://github.com/SeanWelshBrown/focus-backend" target="_blank" rel="noreferrer">Back-end</a></p>

        <div className={styles.projectDescription}>

          <p><strong>Focus</strong> is a desktop web application I developed to help bridge the gap between productivity and mental wellbeing, using responsive web development to create something that is inviting, organic, and easy to use.</p>

          <p>A <strong>Meditation timer</strong> allows the user to turn their concentration inward, taking the time to concentrate on their breath and on slowing down their minds and racing thoughts.</p>

          <p>A <strong>Focus timer</strong> allows the user to turn their concentration outward, using the popular <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank" rel="noreferrer">Pomodoro Technique</a> to healthfully heighten productivity in work or study.</p>

          <p>Users may also <strong>create an account</strong> to log in and <strong>save their Meditation and Focus sessions to a personal database</strong> built with <strong>PostgreSQL</strong> and <strong>Ruby on Rails</strong>, to view a gallery of past sessions or delete them at will.</p>

        </div>

        <div className={styles.projectBuiltWith}>
          <p><strong>Built with:</strong></p>
          <ul>
            <li><a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a> - Front-end framework</li>
            <li><a href="https://redux.js.org/" target="_blank" rel="noreferrer">Redux</a> - State management</li>
            <li><a href="https://rubyonrails.org/" target="_blank" rel="noreferrer">Ruby on Rails</a> - Back-end framework</li>
            <li><a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">PostgreSQL</a> - Database</li>
            <li><a href="https://darksky.net/dev" target="_blank" rel="noreferrer">Dark Sky API</a></li>
            <li><a href="https://theysaidso.com/api/" target="_blank" rel="noreferrer">They Said So Quotes API</a></li>
            <li>Custom CSS for styling</li>
          </ul>
        </div>

        <hr style={{ height: `3px` }} />


        {/* PROJECT 2 */}
        <img src={Fractal1} className={styles.projectImg} />

        <h2><u>The Fractal Zone</u></h2>

        <p className={styles.projectLink}><strong>Hosted:</strong> <a href="https://thefractal.zone/" target="_blank" rel="noreferrer">https://thefractal.zone/</a></p>

        <p><strong>GitHub:</strong> <a href="https://github.com/SeanWelshBrown/the-fractal-zone-frontend" target="_blank" rel="noreferrer">Front-end</a>/<a href="https://github.com/SeanWelshBrown/the-fractal-zone-backend" target="_blank" rel="noreferrer">Back-end</a></p>

        <div className={styles.projectDescription}>

          <p><strong>The Fractal Zone</strong> is a pair project I developed with <a href="https://github.com/Rizz0S" target="_blank" rel="noreferrer">Summer Rizzo</a> that houses a "Fractal Machine" which draws fractal trees to a canvas based on user parameters. Fractal design patterns can then be persisted to the gallery along with their parameters and a downloadable image.</p>

          <p>My primary role in the project was to set up the <strong>PostgreSQL database</strong> and <strong>Ruby on Rails back-end</strong> for persisting user authentication and saved fractal designs. I also built out the initial skeleton and routing of the React front-end and initial CSS styling, then continued to refine and collaborate on both with my partner.</p>

        </div>

        <div className={styles.projectBuiltWith}>
          <p><strong>Built with:</strong></p>
          <ul>
            <li><a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a> - Front-end framework</li>
            <li><a href="https://p5js.org/" target="_blank" rel="noreferrer">p5.js</a> - JavaScript library for drawing interactive canvas on Front-end</li>
            <li><a href="https://rubyonrails.org/" target="_blank" rel="noreferrer">Ruby on Rails</a> - Back-end framework</li>
            <li><a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">PostgreSQL</a> - Database</li>
            <li>Custom CSS for styling</li>
          </ul>
        </div>

        <hr style={{ height: `3px` }} />


        {/* PROJECT 3 */}
        <img src={Portfolio1} className={styles.projectImg} />

        <h2><u>Portfolio Site</u></h2>

        <p className={styles.projectLink}><strong>Hosted:</strong> <a href="" target="_blank" rel="noreferrer">seanwelshbrown.codes</a></p>

        <p><strong>GitHub:</strong> <a href="https://github.com/SeanWelshBrown/portfolio-site" target="_blank" rel="noreferrer">https://github.com/SeanWelshBrown/portfolio-site</a></p>

        <div className={styles.projectDescription}>

          <p>This <strong>Portfolio Site</strong> itself is a personal project as well! I used developing it as an opportunity to learn and practice with <a href="https://www.gatsbyjs.org/" target="_blank" rel="noreferrer">Gatsby</a>, a front-end framework that priotizies performative and search engine optimized static websites.</p>

          <p>I also used it as an opportunity to practice with different styling techniques and design ideas to create a simple, inviting and informative UX.</p>

        </div>

        <div className={styles.projectBuiltWith}>
          <p><strong>Built with:</strong></p>
          <ul>
            <li><a href="https://www.gatsbyjs.org/" target="_blank" rel="noreferrer">GatsbyJS</a> - Front-end framework based on <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a></li>
            <li><a href="https://kyleamathews.github.io/typography.js/" target="_blank" rel="noreferrer">Typography.js</a> - Toolkit for building websites with interrelated styles for cohesive design</li>
            <li>Custom CSS modules for further styling</li>
          </ul>
        </div>

        <hr style={{ height: `3px` }} />


        {/* PROJECT 4 */}
        <img src={Today1} className={styles.projectImg} />

        <h2><u>Today</u></h2>

        <p className={styles.projectLink}><strong>Hosted:</strong> <a href="https://liaowow.github.io/today-frontend/" target="_blank" rel="noreferrer">https://liaowow.github.io/today-frontend/</a></p>

        <p><strong>GitHub:</strong> <a href="https://github.com/liaowow/today-frontend" target="_blank" rel="noreferrer">Front-end</a>/<a href="https://github.com/liaowow/today-backend" target="_blank" rel="noreferrer">Back-end</a></p>

        <div className={styles.projectDescription}>

          <p><strong>Today</strong> is a pair project I developed with <a href="https://github.com/liaowow" target="_blank" rel="noreferrer">Annie Liao</a>. It is a modern, minimalist journaling application and mood tracker.</p>

          <p>Users can <strong>create an account</strong>, <strong>write journal entries and save them to a private database</strong>, then <strong>view, update and delete their entries</strong> in a gallery.</p>

          <p>Users can also see a graphical visualization of their overall mood trend over their previous journal entries, based off of what they selected when the entry was created.</p>

          <p>The application's front-end was built entirely with <strong>vanilla JavaScript</strong> and HTML, in order to practice our fundamentals with the language and strengthen our knowledge of DOM manipulation.</p>

        </div>

        <div className={styles.projectBuiltWith}>
          <p><strong>Built with:</strong></p>
          <ul>
            <li>Vanilla JavaScript for front-end design and functionality</li>
            <li><a href="https://rubyonrails.org/" target="_blank" rel="noreferrer">Ruby on Rails</a> - Back-end framework</li>
            <li><a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">PostgreSQL</a> - Database</li>
            <li><a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap</a> - CSS framework for styling</li>
            <li>Custom CSS for further styling</li>
            <li><a href="https://darksky.net/dev" target="_blank" rel="noreferrer">Dark Sky API</a></li>
          </ul>
        </div>

        <br />

      </Content>

    </Layout>
  )
}
