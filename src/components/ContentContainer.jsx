import React, { Component } from 'react'
import colors from '../utils/colors'

class ContentContainer extends Component {
  render() {
    return (
      <div style={{ margin: '0 auto', maxWidth: 750, padding: '1.25rem 1rem' }}>
        {this.props.children}
      </div>
    )
  }
}

export default ContentContainer