import React from "react"
import Layout from "../components/Layout"
import AllLots from "../components/AllLots"

const Lots = () => {
  return (
    <Layout>
      <main class="lots-page">
        <h1>Lots</h1>
        <AllLots />
      </main>
    </Layout>
  )
}

export default Lots
