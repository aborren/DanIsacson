import React from 'react'
import Header from '../components/Header.jsx'

export default ({ children }) =>
  <div style={{ margin: '0 auto', maxWidth: 750, padding: '1.25rem 1rem' }}>
    <Header />
    {children()}
  </div>