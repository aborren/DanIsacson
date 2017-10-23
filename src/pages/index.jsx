import React, { Component } from 'react'
import Helmet from 'react-helmet'
import BlogPostPreview from '../components/BlogPostPreview'

class IndexPage extends Component {
  render() {
    const latestPost = this.props.data.allMarkdownRemark.edges[0].node
    return (
      <div>
        <Helmet title={"Dan Isacson"} />
        <h1>Welcome!</h1>
        <p>To my page. Here you'll find my portfolio and blogposts about programming and software development. The site is still under construction.</p>
        <h3>Latest blogpost</h3>
        <BlogPostPreview
          to={latestPost.frontmatter.path}
          title={latestPost.frontmatter.title}
          date={latestPost.frontmatter.date}
          excerpt={latestPost.excerpt}
          timeToRead={latestPost.timeToRead}
        />
      </div>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageQuery {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC } limit: 1) {
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