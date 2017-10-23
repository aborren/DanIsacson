import React, { Component } from 'react'
import Header from '../components/Header.jsx'
import ContentContainer from '../components/ContentContainer.jsx'
import Footer from '../components/Footer.jsx'
import _ from 'prismjs/themes/prism-okaidia.css'
import colors from '../utils/colors'

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <ContentContainer>
          {this.props.children()}
        </ContentContainer>
        <Footer />
      </div>
    )
  }
}

export default Layout