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
<<<<<<< HEAD
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
=======
    <nav className="navbar navbar-light bg-light">
   <span className='navbar-brand' href='#'>{data.site.siteMetadata.title}</span>   
      <ul className='nav justify-content-end'>
        <li className='nav-item'>
          <Link className='nav-link active' to='/'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link active' to='/about'>About Us</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link active' to='/blog'>News & Publications</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link active' to='/portfolio'>Portfolio</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link active' to='/codeofconduct/'>Code of Conduct</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link active' to='/contact'>Contact Us</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link active' to='/contacts'>Contacts</Link>
>>>>>>> “MensajeRecordarCambio”
        </li>
        <li>
        <a href=''>API</a>
        </li>
      </ul>
<<<<<<< HEAD
    </div>
=======
    </nav>
>>>>>>> “MensajeRecordarCambio”
  )
}

Navbar.propTypes = {}

export default Navbar
