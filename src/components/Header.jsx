import React, { Component } from 'react'
import Link from 'gatsby-link'
import ListLink from '../components/ListLink.jsx'
import MediaQuery from 'react-responsive'

const bannerStyle = {
  display: 'inline',
}

class Header extends Component {
  render() {
    return (
      <header style={{ marginBottom: '1.5rem' }}>
        <Link to='/' style={{
          textShadow: 'none',
          backgroundImage: 'none',
          color: '#D46A6A'
        }}>
          <MediaQuery minWidth={440}>
            {(matches) => {
              if (matches) {
                return <h3 style={bannerStyle}>Dan Isacson</h3>
              } else {
                return <h3 style={bannerStyle}>DI</h3>
              }
            }}
          </MediaQuery>
        </Link>
        <MediaQuery minWidth={320}>
          {(matches) => {
            if (matches) {
              return <BigList />
            } else {
              return <SmallList />
            }
          }}
        </MediaQuery>
      </header>
    )
  }
}

const SmallList = _ =>
  <ul style={{ listStyle: 'none', float: 'right' }}>
    <ListLink to='/portfolio/'>P</ListLink>
    <ListLink to='/blog/'>B</ListLink>
    <ListLink to='/about/'>A</ListLink>
  </ul>

const BigList = _ =>
  <ul style={{ listStyle: 'none', float: 'right' }}>
    <ListLink to='/portfolio/'>Portfolio</ListLink>
    <ListLink to='/blog/'>Blog</ListLink>
    <ListLink to='/about/'>About</ListLink>
  </ul>

export default Header