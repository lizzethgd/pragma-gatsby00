import React from 'react'
import Navbar from './navbar'
import PropTypes from 'prop-types'

const Header = props => {
  return (
    <header>
      <div>
        <Navbar />
      </div>
    </header>
  )
}

Header.propTypes = {}

export default Header
