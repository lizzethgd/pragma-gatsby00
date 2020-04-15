import React from 'react'
//import { NavLink } from 'react-router-dom'
import Layout from '../components/layout'
import Spinner from './spinner'

const Contacts = props => {

  
  let renderContent

    if (props.contacts.length) {
      renderContent = props.contacts.map((contact, i) => (
        <div key={contact._id} >
           <h4>{contact.firstName} {contact.lastName}</h4>
            <p>{contact.company}</p>
            <p>{contact.telephon}</p>
            <p>{contact.email}</p>
        </div>
      ))
    } else {
      renderContent = <Spinner />
    }

  return (
      <Layout title='Our Contacts' >
      <main>
        <div >
          <div >{renderContent}</div>
        </div>
      </main>
    </Layout>
  )
}

Contacts.propTypes = {}

export default Contacts
