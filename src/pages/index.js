import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/css/style.css"

export default function Home() {
  return (
    <Layout>
      <main class="main-page">
        <h1>WhisKeyValue</h1>
        <div class="main-page__wrap">
          <div class="main-page__cont">
            <StaticImage
              src="../assets/images/title.jpg"
              placeholder="blurred"
            />
          </div>
          <div class="main-page__cont">
            <p>A personalized list of whiskey available in local stores.</p>
            <p>
              What for? To have a working JAM-stack project at hand, and of
              course description of the types of favorite drink:)
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
