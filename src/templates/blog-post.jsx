import React, { Component } from 'react'
import Helmet from 'react-helmet'

class BlogPostTemplate extends Component {
  render() {
    const post = this.props.data.markdownRemark
    const title = post.frontmatter.title
    const date = post.date
    return (
      <div>
        <Helmet title={title + " - Dan Isacson" || "Dan Isacson"} />
        <h1>{title}</h1>
        <small>{date}</small>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
query BlogPostByPath($path: String!) {
  site {
    siteMetadata {
      title
    }
  }
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    id
    html
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
}
`