// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    // If the page matches 404 (the error page) choose the error layout
    if (page.path.match(/^\/404/)) {
      // It's assumed that `error.js` exists in the `/layouts/` directory
      page.layout = 'error'
      // Update the page.
      createPage(page)
    }

    resolve()
  })
}