import React from 'react'
import Input from '../../shared/components/FormElements/Input'
import './NewProduct.css'
function NewProduct() {
  return(
    <form className='place-form'>
      <Input element='input' type='text' label='Name' validators={[]} errorText='please enter a valid title' />
      <Input element='textarea' type='text' label='Description' validators={[]} errorText='please enter a valid title' />
      <Input element='input' type='text' label='Link' validators={[]} errorText='please enter a valid title' />
    </form>
  )
}

export default NewProduct