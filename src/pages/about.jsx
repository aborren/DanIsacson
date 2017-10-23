import React, { Component } from 'react'
import Helmet from 'react-helmet'
import colors from '../utils/colors'

const linkStyle = {
  color: colors.dnaPink
}

class AboutPage extends Component {
  render() {
    return (
      <div>
        <Helmet title={"Dan Isacson - About"} />
        <h1>About</h1>
        <p>This is a developer's portfolio and blog.</p>
        <h3>Who?</h3>
        <p>I'm Dan, a professional iOS developer at <a style={linkStyle} href="http://www.themobilelife.com/" target="_blank">The Mobile Life</a>.</p>
        <h3>Why?</h3>
        <p>Because sometimes I like to share things related to programming.</p>
        <h3>What?</h3>
        <p>This site is a work in progress. It is developed using <a style={linkStyle} href="https://reactjs.org/" target="_blank">React</a> with <a style={linkStyle} href="https://www.gatsbyjs.org" target="_blank">Gatsby</a> on <a style={linkStyle} href="https://firebase.google.com/docs/hosting/" target="_blank">Firebase Hosting</a>.</p>
      </div>
    )
  }
}

export default AboutPage