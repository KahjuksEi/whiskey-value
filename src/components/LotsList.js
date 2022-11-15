import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const LotsList = ({ lots = [] }) => {
  return (
    <div class="lotslist">
      {lots.map(lot => {
        const { id, title, image, rating } = lot
        const pathToImage = getImage(image)
        const slug = slugify(title, { lower: true })
        return (
          <Link key={id} to={`/${slug}`}>
            <GatsbyImage image={pathToImage} alt={title} />
            <p>rating: {rating}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default LotsList
