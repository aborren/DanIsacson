import React, { Component } from 'react'
import Helmet from 'react-helmet'
import BlogPostFooter from '../components/BlogPostFooter'
import colors from '../utils/colors'

class BlogPostTemplate extends Component {
  render() {
    const post = this.props.data.markdownRemark
    const title = post.frontmatter.title
    const date = post.frontmatter.date
    return (
      <div>
        <Helmet title={"Dan Isacson - " + title}>          
          <meta name="description" content={title + " by Dan Isacson"} />
        </Helmet>
        <h1>{title}</h1>
        <small style={{color: colors.dnaPurple}}>{date}</small>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <BlogPostFooter />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
query BlogPostByPath($path: String!) {
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