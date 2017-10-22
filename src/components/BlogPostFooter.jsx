import React, { Component } from 'react'
import Link from 'gatsby-link'
import colors from '../utils/colors'

class BlogPostFooter extends Component {
  render() {
    return (
        <div>
          <small style={{color: colors.dnaCyan}}>Author: Dan Isacson</small>
        </div>
    )
  }
}

export default BlogPostFooter