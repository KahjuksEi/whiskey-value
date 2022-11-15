import React from "react"
import Layout from "../components/Layout"
import { SEO } from "../components/Seo"

const Error = () => {
  return (
    <Layout>
      <h1>Error page</h1>
    </Layout>
  )
}

export default Error

export const Head = () => {
  return <SEO data={{title: "Page Not Found!"}} />;
};