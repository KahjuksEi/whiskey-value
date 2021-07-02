import React from "react"
import { graphql } from "gatsby"
import LotsList from "../components/LotsList"
import Layout from "../components/Layout"

const TagTemplate = ({ data, pageContext }) => {
  const lots = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <main class="tag-template">
        <h3>tag-template.js {pageContext.tag}</h3>
        <LotsList lots={lots} />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        title
        rating
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default TagTemplate
