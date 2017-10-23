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
        timeToRead={post.node.timeToRead}
      />
    )

    return (
      <div>
        <Helmet title={"Dan Isacson - Blog"}>
          <meta name="description" content="Dan Isacson's blog" />
        </Helmet>
        <h1>Blog</h1>
        <p>I occasionally post things related to programming and software development here. You may somtimes also find unrelated random posts!</p>
        <ul style={{ marginLeft: 0 }}>
          {posts}
        </ul>
      </div>
    )
  }
}

export default BlogPage

export const pageQuery = graphql`
query BlogPostsQuery {

  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        excerpt
        timeToRead
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