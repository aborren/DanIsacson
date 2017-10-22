const path = require("path")

exports.createPages = async ({ page, graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const blogPost = path.resolve("./src/templates/blog-post.jsx")
    resolve(
      graphql(
      `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
      `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        // Create blog posts pages.
        result.data.allMarkdownRemark.edges.map(({node}) => {
          createPage({
            path: node.frontmatter.path,
            component: blogPost,
            context: {
              path: node.frontmatter.path,
            },
          })
        })
      })
    )
  })
}