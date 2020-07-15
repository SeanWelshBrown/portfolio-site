import React from 'react';
import { Link } from 'gatsby';

// components
import SEO from "./seo"

// images
import GatsbyLogo from '../images/logos/gatsby-logo.svg'
import ReactLogo from '../images/logos/react-logo.png'


// Gatsby Link component turned into styled <li> element
const ListLink = props => {
  return (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )
}


// image links to Gatsby and React websites, abstracted as separate components to keep the footer JSX more readable
const GatsbyLink = () => {
  return (
    <a href="https://www.gatsbyjs.org/" target="_blank" rel="noreferrer">
      <img src={GatsbyLogo} alt="Gatsby Logo" style={{ width: 70, marginBottom: -3 }} />
    </a>
  )
}
const ReactLink = () => {
  return (
    <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
      <img src={ReactLogo} alt="React Logo" style={{ width: 70, marginBottom: -14 }} />
    </a>
  )
}


export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 750, padding: `0 1rem` }}>

      <SEO />

      <header style={{ marginBottom: `1.5rem` }}>

        <Link to={"/"} style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline`, fontSize: `30px` }}>
            Sean Welsh Brown
          </h3>
        </Link>

        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to={"/about/"}>About</ListLink>
          <ListLink to={"/projects/"}>Projects</ListLink>
          <ListLink to={"/resume/"}>Resume</ListLink>
          <ListLink to={"/contact/"}>Contact</ListLink>
        </ul>

      </header>


      {children}


      <footer style={{ 
              position: `fixed`,
              left: 0,
              bottom: 0,
              width: `100%`,
              textAlign: `center`,
              backgroundColor: `white`,
      }}>

        <div style={{ 
              maxWidth: 750, 
              margin: `auto`, 
              borderTop: `1px solid #e3c7c3`, 
              boxShadow: `0px -1px 5px #9c9c9c` }}>
        </div>

        <h6 style={{ margin: `0px auto`, marginBottom: `11px` }}>
          Website built with <span role="img" aria-label="Heart Emoji">❤️</span> using {GatsbyLink()} and {ReactLink()}
        </h6>

        
      </footer>
      
    </div>
  )
}
