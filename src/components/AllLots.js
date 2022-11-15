import React from "react"
import TagsList from "./TagsList"
import LotsList from "./LotsList"
import { useStaticQuery, graphql } from "gatsby"

export const query = graphql`
  {
    allContentfulItem(filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        rating
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

const AllLots = () => {
  const data = useStaticQuery(query)
  const lots = data.allContentfulItem.nodes
  // destructurization example
  // const {
  //   allContentfulItem: { nodes: lots },
  // } = useStaticQuery(query)
  return (
    <section>
      <TagsList lots={lots} />
      <LotsList lots={lots} />
    </section>
  )
}

export default AllLots
