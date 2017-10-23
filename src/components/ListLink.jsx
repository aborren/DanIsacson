import React, { Component } from 'react'
import Link from 'gatsby-link'
import colors from '../utils/colors'

const linkStyle = {
  color: colors.dnaDark
}

class ListLink extends Component {
  render() {
    return (
      <li style={{ display: 'inline-block', marginRight: '1rem' }}>
        <div style={linkStyle}>
          <Link
            to={this.props.to}
            style={{
              textShadow: 'none',
              backgroundImage: 'none',
              color: colors.dnaDark
            }}>
            {this.props.children}
          </Link>
        </div>
      </li>
    )
  }
}

export default ListLink
