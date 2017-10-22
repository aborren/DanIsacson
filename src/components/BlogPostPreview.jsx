import React, { Component } from 'react'
import Link from 'gatsby-link'
import colors from '../utils/colors'

const linkStyle = {
  color: colors.dnaPink
}

class BlogPostPreview extends Component {
  render() {
    return (
        <div>
        <Link
          to={this.props.to}
          style={{
            textShadow: 'none',
            backgroundImage: 'none',
            color: 'black'
          }}>
          <div style={linkStyle}>{this.props.title}</div>
        </Link>
        <small>{this.props.date}</small>
        <p dangerouslySetInnerHTML={{ __html: this.props.excerpt }} />
        </div>
    )
  }
}

export default BlogPostPreview