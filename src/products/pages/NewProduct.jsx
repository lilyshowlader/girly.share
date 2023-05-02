import React, { useCallback } from 'react'
import Input from '../../shared/components/FormElements/Input'
import { VALIDATOR_REQUIRE } from '../../shared/util/validators'
import './NewProduct.css'



function NewProduct() {
  const titleInputHandler = useCallback((id, value, isValid) => {}, [])
  const descriptionInputHandler = useCallback((id, value, isValid) => {}, [])
  const linkInputHandler = useCallback((id, value, isValid) => {}, [])


  return (
    <form className='place-form'>
      <Input 
      id='title'
      element='input' 
      type='text' 
      label='name' 
      validators={[VALIDATOR_REQUIRE()]} 
      errorText='please enter a valid title' 
      onInput={titleInputHandler}
      />

      <Input 
      id='description'
      element='textarea' 
      type='text' 
      label='description' 
      validators={[VALIDATOR_REQUIRE()]} 
      errorText='please enter a description!' 
      onInput={descriptionInputHandler}
      />

      <Input 
      id='link'
      element='input' 
      type='text' 
      label='link' 
      validators={[VALIDATOR_REQUIRE()]} 
      errorText='please enter a valid title' 
      onInput={linkInputHandler}
      />
    </form>
  )
}

export default NewProduct