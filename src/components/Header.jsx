import React, { Component } from 'react'
import Link from 'gatsby-link'
import ListLink from '../components/ListLink.jsx'
import MediaQuery from 'react-responsive'
import colors from '../utils/colors'

const bannerStyle = {
  display: 'inline',
  color: 'white',
  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: 'white',
  padding: '0 8px'
}

class Header extends Component {
  render() {
    return (
      <div style={{ backgroundColor: colors.dnaCyan }}>
        <div style={{ margin: '0 auto', maxWidth: 750, padding: '1.25rem 1rem' }}>
          <header>
            <Link to='/' style={{
              backgroundImage: 'none',
              color: 'white'
            }}>
              <h3 style={bannerStyle}>DI </h3>
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
        </div>
      </div >
    )
  }
}

const SmallList = _ =>
  <ul style={{ display: 'inline', listStyle: 'none', float: 'right', margin: '0' }}>
    <ListLink to='/portfolio/'>Ptfo</ListLink>
    <ListLink to='/blog/'>Blg</ListLink>
    <ListLink to='/about/'>Abt</ListLink>
  </ul>

const BigList = _ =>
  <ul style={{
    display: 'inline',
    listStyle: 'none', float: 'right',
    margin: '0' 
  }}>
    <ListLink to='/portfolio/'>Portfolio</ListLink>
    <ListLink to='/blog/'>Blog</ListLink>
    <ListLink to='/about/'>About</ListLink>
  </ul>

export default Header