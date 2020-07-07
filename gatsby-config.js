/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Sean Welsh Brown`,
    titleTemplate: "%s · Software Engineer",
    description: `Full-Stack Web Developer and Software Engineer with a background in the performing arts, hoping to make a positive impact on the world.`,
    url: `https://www.seanwelshbrown.com`,
    image: `/seanwelshbrown-logo.png`,
    author: `Sean Welsh Brown`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`
  ],
}
