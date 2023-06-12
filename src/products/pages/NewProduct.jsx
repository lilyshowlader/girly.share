import React from 'react'

import Input from '../../shared/components/FormElements/Input'
import Button from'../../shared/components/FormElements/Button'
import { VALIDATOR_REQUIRE } from '../../shared/util/validators'
import { useForm } from '../../shared/hooks/form-hook'
import './ProductForm.css'




function NewProduct() {
  const [formState, inputHandler] = useForm({
    title: {
      value: '',
      isValid: 'false'
    },
    description: {
      value: '',
      isValid: 'false'
    },
    link: {
      value: '',
      isValid: 'false'
    },
  }, false )

  

  const productSubmitHandler = event => {
    event.preventDefault()
    console.log(formState.inputs) // send this to the backend!
  }



  return (
    <form className='place-form' onSubmit={productSubmitHandler}>
      <Input 
      id='title'
      element='input' 
      type='text' 
      label='name' 
      validators={[VALIDATOR_REQUIRE()]} 
      errorText='please enter a valid title' 
      onInput={inputHandler}
      />

      <Input 
      id='description'
      element='textarea' 
      type='text' 
      label='description' 
      validators={[VALIDATOR_REQUIRE()]} 
      errorText='please enter a description!' 
      onInput={inputHandler}
      />

      <Input 
      id='link'
      element='input' 
      type='text' 
      label='link' 
      validators={[VALIDATOR_REQUIRE()]} 
      errorText='please enter a link' 
      onInput={inputHandler}
      />
      <Button type='submit' disabled={!formState.isValid}>
        add product
      </Button>
    </form>
  )
}

export default NewProduct