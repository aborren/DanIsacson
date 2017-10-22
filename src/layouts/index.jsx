import React from 'react'
import Header from '../components/Header.jsx'
import _ from 'prismjs/themes/prism-okaidia.css'

export default ({ children }) =>
  <div style={{ margin: '0 auto', maxWidth: 750, padding: '1.25rem 1rem' }}>
    <Header />
    {children()}
  </div>