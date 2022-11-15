import React from "react"
import Layout from "../components/Layout"
import { SEO } from "../components/Seo"
import { Link, graphql } from "gatsby"
import setupTags from "../utils/setupTags"
import slugify from "slugify"

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulItem.nodes)
  return (
    <Layout>
      <main class="tags-page">
        <h1>Tags</h1>
        <section>
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })
            return (
              <Link key={index} to={`/tags/${slug}`}>
                <b>{text} - </b>
                <span>{value}</span>
                <hr />
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const Head = ({ data }) => {
  return <SEO data={data} />;
};

export const query = graphql`
  {
    allContentfulItem {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
