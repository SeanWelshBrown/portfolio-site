import React from 'react';
import { Link } from 'gatsby';

// images
import GatsbyLogo from '../images/gatsby-logo.svg'
import ReactLogo from '../images/react-logo.png'


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
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>

      <header style={{ marginBottom: `1.5rem` }}>

        <Link to={"/"} style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>
            Sean Welsh Brown
          </h3>
        </Link>

        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to={"/about/"}>About</ListLink>
          <ListLink to={"/projects/"}>Projects</ListLink>
          <ListLink to={"/resume/"}>Resume</ListLink>
          <ListLink to={"/blogs/"}>Blogs</ListLink>
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

        <div style={{ width: `30%`, margin: `auto`, borderTop: `1px solid #e3c7c3` }}></div>

        <h6>
          Website created with <span role="img" aria-label="Heart Emoji">❤️</span> using {GatsbyLink()} and {ReactLink()}
        </h6>

        
      </footer>
      
    </div>
  )
}
