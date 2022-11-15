const path = require("path")
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetItems {
      allContentfulItem {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)
  result.data.allContentfulItem.nodes.forEach(item => {
    item.content.tags.forEach(tag => {
      const tagSlug = slugify(tag, { lower: true })
      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: { tag: tag },
      })
    })
  })
}
