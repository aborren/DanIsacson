import React, { Component } from 'react'
import Helmet from 'react-helmet'

class AboutPage extends Component {
  render() {
    return (
      <div>
        <Helmet title={"About - Dan Isacson"} />
        <h1>About</h1>
        <p>This is a developer's portfolio and blog.</p>
        <h3>Who?</h3>
        <p>I'm Dan, a professional iOS developer at <a href="http://www.themobilelife.com/" target="_blank">The Mobile Life</a>.</p>
        <h3>Why?</h3>
        <p>Because sometimes I like to share things related to programming.</p>
        <h3>What?</h3>
        <p>This site is a work in progress. It is developed using <a href="https://reactjs.org/" target="_blank">React</a> with <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a> on <a href="https://firebase.google.com/docs/hosting/" target="_blank">Firebase Hosting</a>.</p>
      </div>
    )
  }
}

export default AboutPage