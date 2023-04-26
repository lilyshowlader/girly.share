import React from 'react'
import Input from '../../shared/components/FormElements/Input'
import { VALIDATOR_REQUIRE } from '../../shared/util/validators'
import './NewProduct.css'



function NewProduct() {
  const titleInputHandler = (id, value, isValid) => {

  }


  return (
    <form className='place-form'>
      <Input 
      element='input' 
      type='text' 
      label='Name' 
      validators={[VALIDATOR_REQUIRE()]} 
      errorText='please enter a valid title' 
      onInput={titleInputHandler}
      />
    </form>
  )
}

export default NewProduct