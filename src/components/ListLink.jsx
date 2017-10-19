import React, { Component } from 'react'
import Link from 'gatsby-link'

class ListLink extends Component {
  render() {
    return (
      <li style={{ display: 'inline-block', marginRight: '1rem' }}>
        <Link to={this.props.to}>
          {this.props.children}
        </Link>
      </li>
    )
  }
}

export default ListLink
