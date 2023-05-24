import React, { useCallback, useReducer } from 'react'
import Input from '../../shared/components/FormElements/Input'
import Button from'../../shared/components/FormElements/Button'
import { VALIDATOR_REQUIRE } from '../../shared/util/validators'
import './NewProduct.css'

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId] : { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      }
    default:
      return state 
  }
}

function NewProduct() {
  // initial states
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
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
    },
    isValid: false
  })

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({ type: "INPUT_CHANGE", value: value, isValid: isValid, inputId: id})
  }, [])

  const productSubmitHandler = event => {
    event.preventDefault()
    console.log(formState.inputs) // send this to the backend.
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