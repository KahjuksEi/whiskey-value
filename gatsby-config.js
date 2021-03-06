/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "whiskey review",
    description: "Whiskey I got",
    person: { name: "Ash", age: "33" },
    complexData: [
      { name: "Jim Beam", age: "3" },
      { name: "Jameson", age: "5" },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `c1z2370zk7v7`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
  ],
}
