import React, { Component } from 'react'
import Link from 'gatsby-link'

const linkStyle = {
  color: '#D46A6A'
}

class ListLink extends Component {
  render() {
    return (
      <li style={{ display: 'inline-block', marginRight: '1rem' }}>
        <Link to={this.props.to}>
          <a style={linkStyle}>{this.props.children}</a>
        </Link>
      </li>
    )
  }
}

export default ListLink
