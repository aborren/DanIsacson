import React, { Component } from 'react'

class AboutPage extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This is a developer's portfolio and blog.</p>
        <h3>Who?</h3>
        <p>I'm Dan, a professional iOS developer at <a href="http://www.themobilelife.com/">The Mobile Life</a>.</p>
        <h3>Why?</h3>
        <p>Because Swift is awesome.</p>
        <h3>What?</h3>
        <p>This site is a work in progress. It is developed using <a href="https://reactjs.org/">React</a> with <a href="https://www.gatsbyjs.org">Gatsby</a> and is hosted on <a href="https://firebase.google.com/docs/hosting/">Firebase Hosting</a>.</p>
      </div>
    )
  }
}

export default AboutPage