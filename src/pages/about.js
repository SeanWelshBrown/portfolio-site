import React from "react"

// components
import Layout from "../components/layout"
import Content from "../components/content-div"

// images
import SeanThailand from "../images/sean/sean-thailand.jpg"

export default function About() {
  return (
    <Layout>
      <Content>
        <img
          src={SeanThailand}
          alt="Me at an art museum in Thailand"
          style={{
            borderRadius: `50%`,
            width: `300px`,
            boxShadow: `0 0 8px 2px`,
          }}
        />

        <h2>
          About me{" "}
          <span role="img" aria-label="Lightbulb Emoji">
            💡
          </span>
        </h2>

        <p>
          A native born New Yorker by way of Manhattan and current New Jerseyan. You could say I like the pizza and bagels around here
          enough to stick around.{" "}
          <span role="img" aria-label="Pizza Emoji">
            🍕
          </span>
          <span role="img" aria-label="Bagel Emoji">
            🥯
          </span>
        </p>

        <p>
          I've had a passion for technology and all things nerdy since I was first old enough to
          hold a Game Boy and tinker with MS-DOS on my dad's work laptop, and that love of software and
          gadgets has been the core of my identity ever since.
        </p>

        <p>
          I've also maintained a love of the arts and humanities thanks to museum trips, musicals,
          and everything in-between while growing up. That love grew into pursuing a <b>BFA from NYU</b> (with a <b>Minor in Web Design and Applications</b>, and a 12 year acting and voice-over career in NYC.
        </p>

        <p>
          As an actor and narrator I've worked with some amazing clients, such as{" "}
          <b>Audible, Scholastic, Microsoft, Blizzard Entertainment, Nickelodeon,</b> and many more.
        </p>

        <p>
          Once I knew I was ready for a change, I decided that it was time to pursue my other
          lifelong love of technology and software. I attended <b>Flatiron School</b> for their{" "}
          <b>Software Engineering</b> program, spending an incredible 15 weeks learning everything I
          could about modern web development and programming fundamentals.
        </p>

        <p>
          I've discovered an even deeper passion for programming and software development than ever
          before, and am continuing to learn new skills and chase my dream of bringing the arts,
          humanities, technology, and compassion together to make a difference in the world.
        </p>

        <br />
      </Content>
    </Layout>
  )
}
