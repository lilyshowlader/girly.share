import React from 'react'
import Input from '../../shared/components/FormElements/Input'
import './NewProduct.css'
function NewProduct() {
  return(
    <form className='place-form'>
      <Input element='input' type='text' label='Title'/>
    </form>
  )
}

export default NewProduct