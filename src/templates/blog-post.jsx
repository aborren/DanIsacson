import React, { Component } from 'react'

class BlogPostTemplate extends Component {
  render() {
    const post = this.props.data.markdownRemark
    const title = post.frontmatter.title
    const date = post.date
    return (
      <div>
        <h1>{title}</h1>
        <small>{date}</small>
        <p>{this.props.data.markdownRemark.id}</p>
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