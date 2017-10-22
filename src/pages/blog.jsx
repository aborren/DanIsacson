import React, { Component } from 'react'
import Link from 'gatsby-link'

class BlogPage extends Component {
  render() {
    //const posts = get(this, props.data.allMarkdownRemark.edges)
    const posts = this.props.data.allMarkdownRemark.edges.map(post =>
      <div key={post.node.frontmatter.path}>
        <Link
          style={{ boxShadow: 'none' }}
          to={post.node.frontmatter.path}
        >
          {post.node.frontmatter.title}
        </Link>
        <small>{post.node.frontmatter.date}</small>
        <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
      </div>
    )

    return (
      <div>
        <h1>Blog</h1>
        <p>Blog posts will be here!</p>
        {posts}
      </div>
    )
  }
}

export default BlogPage

export const pageQuery = graphql`
query BlogPostsQuery {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        excerpt
        frontmatter {
          title
          path
          date(formatString: "DD MMMM, YYYY")
        }
      }
    }
  }
}
`