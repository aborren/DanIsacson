import React, { Component } from 'react'
import Link from 'gatsby-link'
import BlogListItem from '../components/BlogListItem.jsx'
import Helmet from 'react-helmet'

class BlogPage extends Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges.map(post =>
      <BlogListItem
        key={post.node.frontmatter.path}
        to={post.node.frontmatter.path}
        title={post.node.frontmatter.title}
        date={post.node.frontmatter.date}
        excerpt={post.node.excerpt}
      />
    )

    return (
      <div>
        <Helmet title={"Blog - Dan Isacson"} />
        <h1>Blog</h1>
        <p>I occasionally post things related to programming and software development here. You may somtimes also find unrelated random posts!</p>
        <ul>
          {posts}
        </ul>
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