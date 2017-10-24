import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header.jsx'
import ContentContainer from '../components/ContentContainer.jsx'
import Footer from '../components/Footer.jsx'
import _ from 'prismjs/themes/prism-okaidia.css'
import colors from '../utils/colors'
import "./index.css";

class Layout extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Dan Isacson</title>
          <meta name="keywords" content="Swift,iOS,Apple,iPhone,Mac,React,ReactNative,Cocoa,Mobile,Develop,Javascript,Blog,Consult,Help,Freelance" />
          <meta name="author" content="Dan Isacson" />
          <meta name="description" content="Dan Isacson's developer blog and portfolio" />
        </Helmet>
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