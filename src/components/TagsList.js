import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"
import slugify from "slugify"

const TagsList = ({ lots }) => {
  const newTags = setupTags(lots)
  return (
    <section>
      <h4>TagsList.js</h4>
      <div class="all-tags__wrap">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          const slug = slugify(text, { lower: true })
          return (
            <Link to={`/tags/${slug}`} key={index}>
              {text}({value})
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default TagsList
