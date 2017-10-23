import React, { Component } from 'react'
import Helmet from 'react-helmet'
import colors from '../utils/colors'

const linkStyle = {
  color: colors.dnaPink
}

class PortfolioPage extends Component {
  render() {
    return (
      <div>
        <Helmet title={"Dan Isacson - Portfolio"}>
          <meta name="description" content="Dan Isacson's portfolio" />
        </Helmet>
        <h1>Portfolio</h1>
        <p>Portfolio will be here! But for now I'll list some of the clients I've worked with: <a style={linkStyle} href="https://www.absolut.com/se/" target="_blank">Absolut</a>, <a style={linkStyle} href="http://www.vasaloppet.se/" target="_blank">Vasaloppet</a>, <a style={linkStyle} href="https://www.betsson.com/en/" target="_blank">Betsson</a>, <a style={linkStyle} href="https://www.bethard.com/" target="_blank">Bethard</a>, <a style={linkStyle} href="https://www.betsafe.com/" target="_blank">Betsafe</a></p>
      </div>
    )
  }
}

export default PortfolioPage