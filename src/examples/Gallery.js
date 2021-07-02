import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FetchData from "../examples/FetchData"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: { grayscale: true }
          )
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  return (
    <div>
      {nodes.map((image, index) => {
        const { name } = image
        const pathToImage = getImage(image)
        return (
          <article key={index}>
            <p>{name}</p>
            <GatsbyImage image={pathToImage} alt={name} />
          </article>
        )
      })}
      <FetchData />
    </div>
  )
}

export default Gallery
