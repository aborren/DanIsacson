import React, { Component } from 'react'
import Link from 'gatsby-link'
import colors from '../utils/colors'

const linkStyle = {
  color: colors.dnaPink
}

class ListLink extends Component {
  render() {
    return (
      <li style={{ display: 'inline-block', marginRight: '1rem' }}>
        <Link
          to={this.props.to}
          style={{
            textShadow: 'none',
            backgroundImage: 'none',
            color: 'black'
          }}>
          <div style={linkStyle}>{this.props.children}</div>
        </Link>
      </li>
    )
  }
}

export default ListLink
