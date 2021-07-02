import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <div>
      <article>
        <h2>Whiskey</h2>
        <StaticImage
          src="../assets/images/1.jpg"
          alt="whiskey"
          width={100}
          height={200}
          placeholder="tracedSVG"
          layout="constrained"
        />
      </article>
      <article>
        <h2>Whiskey</h2>
        <StaticImage
          src="../assets/images/2.jpg"
          alt="whiskey"
          width={100}
          height={200}
          placeholder="blurred"
          layout="constrained"
        />
      </article>
      <article>
        <h2>Whiskey</h2>
        <StaticImage
          src="../assets/images/3.jpg"
          alt="whiskey"
          width={100}
          height={200}
          placeholder="dominantColor"
          layout="constrained"
        />
      </article>
    </div>
  )
}

export default Images
