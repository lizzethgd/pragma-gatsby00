import React from 'react'

import PropTypes from 'prop-types'
import Layout from "../components/layout"

const ContactForm = props => {
  const handleSubmit = e => {
    e.preventDefault()
    /*const formData2 = props.formData2
    const url = '/api/v1.0.0/contacts'
    axios.post(url, formData2).then(response => {
      console.log(response)
      console.log('saved')
    })
    props.addContact(formData2)
    props.history.push('/contacts')*/
  }

  return (
      <Layout  >
      <main>
        <hi>Contact Form</hi>
        <div className='main-wrapper'>
          <form onSubmit=''>
            <div >
              <label htmlFor='firstName'>First Name</label>
              <input
                id='firstName'
                type='text'
                name='firstName'
                value=''
                onChange=''
                placeholder='First name'
              />
            </div>
            <div >
              <label htmlFor='lastName'>Last Name</label>
              <input
                id='lastName'
                type='text'
                name='lastName'
                value=''
                onChange=''
                placeholder='Last name'
              />
            </div>
            <div >
              <label htmlFor='companycountry'>Company</label>
              <input
                id='company'
                type='text'
                name='company'
                value=''
                onChange=''
                placeholder='Company'
              />
            </div>

            <div >
              <label htmlFor='telephon'>Telephon</label>
              <input
                type='text'
                id='telephon'
                name='telephon'
                value=''
                onChange=''
                placeholder='Telephone'
              />
            </div>
            <div >
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                name='email'
                cols='120'
                rows='10'
                value=''
                onChange=''
                placeholder='Email'
              ></input>
            </div>

            <button className='btn' type='submit' id='submit-button'>
              Send
            </button>
          </form>
        </div>
      </main>
    </Layout>
  )
}

ContactForm.propTypes = {}

export default ContactForm
