import React from 'react'
import PropTypes from 'prop-types'
import './CoreLayout.css'

export const CoreLayout = ({ children }) => (
  <div className="page">
    <div className="page-content">{children}</div>
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.node
}

export default CoreLayout
