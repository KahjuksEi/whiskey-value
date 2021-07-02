import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query fetchQuery {
    site {
      siteMetadata {
        description
        title
        person {
          name
        }
      }
    }
  }
`

const FetchData = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <p>{title}</p>
      {/* <p>{data.site.siteMetadata.person.name}</p> */}
    </div>
  )
}

export default FetchData
