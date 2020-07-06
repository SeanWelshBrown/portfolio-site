import React from 'react';

// images
import LinkedInMark from "../images/logos/linkedin-mark.png"
import GitHubMark from "../images/logos/github-mark.png"
import MediumMark from "../images/logos/medium-mark.png"
import DevToMark from "../images/logos/devto-mark.svg"

// style
import styles from "./contact-list.module.css"


// image links to social media, abstracted as separate components to keep render JSX more readable
const LinkedInLink = () => {
  return (
    <a href="https://www.linkedin.com/in/seanwelshbrown/" target="_blank" rel="noreferrer">
      <img src={LinkedInMark} alt="LinkedIn Logo" className={styles.brandImg} />
    </a>
  )
}
const GitHubLink = () => {
  return (
    <a href="https://github.com/SeanWelshBrown" target="_blank" rel="noreferrer">
      <img src={GitHubMark} alt="GitHub Logo" className={styles.brandImg} />
    </a>
  )
}
const MediumLink = () => {
  return (
    <a href="https://medium.com/@seanwelshbrown" target="_blank" rel="noreferrer">
      <img src={MediumMark} alt="Medium Logo" className={styles.brandImg} />
    </a>
  )
}
const DevToLink = () => {
  return (
    <a href="https://dev.to/seanwelshbrown" target="_blank" rel="noreferrer">
      <img src={DevToMark} alt="Dev.to Logo" className={styles.brandImg} />
    </a>
  )
}


export default function ContactList() {
  return (

    <ul className={styles.brandList}>

      <li>{LinkedInLink()}</li>
      <li>{GitHubLink()}</li>
      <li>{MediumLink()}</li>
      <li>{DevToLink()}</li>

    </ul>

  )
}