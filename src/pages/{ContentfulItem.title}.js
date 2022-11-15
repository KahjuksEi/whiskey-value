import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"
import { SEO } from "../components/Seo"
import Layout from "../components/Layout"
//чисто создался шабл под страницы
//где урл страницы равен title из allContentfulItem

const LotsTemplate = ({ data }) => {
  const {
    title,
    content,
    description: { description },
    rating,
    image,
  } = data.contentfulItem
  const pathToImage = getImage(image)
  const { tags, ingredients, instructions, tools } = content
  return (
    <Layout>
      <main class="contentful-item">
        <h3>{title}</h3>
        <GatsbyImage image={pathToImage} alt={title} />
        <p>{description}</p>
        <p>rating: {rating}</p>
        <p>
          Tags:
          {tags.map((tag, index) => {
            const slug = slugify(tag, { lower: true })
            return (
              <Link to={`/tags/${slug}`} key={index}>
                {tag}
              </Link>
            )
          })}
        </p>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleItem($title: String) {
    contentfulItem(title: { eq: $title }) {
      title
      content {
        tags
        ingredients
        instructions
        tools
      }
      description {
        description
      }
      rating
      image {
        gatsbyImageData
      }
    }
  }
`

export default LotsTemplate

export const Head = ({data}) => {
  return <SEO data={{title: data.contentfulItem.title}} />;
};