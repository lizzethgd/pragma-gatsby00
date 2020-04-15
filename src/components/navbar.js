import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

const Navbar = props => {
  const data = useStaticQuery(graphql`
  query{
    site{
      siteMetadata{
        title
      }
    }
  }`)
  return (
    <div >
  <h1>{data.site.siteMetadata.title}</h1>   
      <ul >
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
        <li>
          <Link to='/blog'>News & Publications</Link>
        </li>
        <li>
          <Link to='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link to='/codeofconduct/'>Code of Conduct</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
        </li>
        <li>
          <Link to='/contacts'>Contacts</Link>
        </li>
        <li>
        <a href=''>API</a>
        </li>
      </ul>
    </div>
  )
}

Navbar.propTypes = {}

export default Navbar
