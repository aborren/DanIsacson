import React, { Component } from 'react'
import Link from 'gatsby-link'
import ListLink from '../components/ListLink.jsx'

class Header extends Component {
  render() {
    return (
      <header style={{ marginBottom: '1.5rem' }}>
        <Link to='/' style={{ textShadow: 'none', backgroundImage: 'none' }}>
          <h3 style={{ display: 'inline' }}>Dan Isacson</h3>
        </Link>
        <ul style={{ listStyle: 'none', float: 'right' }}>
          <ListLink to='/portfolio/'>Portfolio</ListLink>
          <ListLink to='/blog/'>Blog</ListLink>
          <ListLink to='/about/'>About</ListLink>
        </ul>
      </header>
    )
  }
}

export default Header