import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators'
import { useForm } from '../../shared/hooks/form-hook'
import './ProductForm.css'

export default function UpdateProduct() {
// dummy data 
const DUMMY_PRODUCTS = [ 
	{
		id: 'p1',
		title: 'mirena',
		description: 'low dose hormonal birth control',
		imageUrl: 'https://i.imgur.com/FRvy3sb.png',
		creator: 'userone'
	},

	{
		id: 'p2',
		title: 'nuvaring',
		description: 'low dose hormonal birth control',
		imageUrl: 'https://i.imgur.com/p9WwwKV.png',
		creator: 'usertwo'
	},

	{
		id: 'p3',
		title: 'cora tampons',
		description: 'organic cotton tampons',
		imageUrl: 'https://i.imgur.com/mzJlcuB.png',
		creator: 'userthree'
	},
]

const [isLoading, setIsLoading] = useState(true)
const productId = useParams().productId;


const [formState, inputHandler, setFormData] = useForm({
	title: {
		value: '',
		isValid: false,
	},
	description: {
		value: '',
		isValid: false,
	}
}, false )

const identifiedProduct = DUMMY_PRODUCTS.find(p => p.id === productId);
	// go through all products and find the product where the ID is equal to productId

	useEffect(() => {
		setFormData({
			title: {
				value: identifiedProduct.title,
				isValid: true,
			},
			description: {
				value: identifiedProduct.description,
				isValid: true,
			}
		}, true)
		setIsLoading(false)
	}, [setFormData, identifiedProduct])
	

const productUpdateSubmitHandler = event => {
	event.preventDefault();
	console.log(formState.inputs)
}

if (!identifiedProduct) {
	return <div className="center">
		<h2>could not find product!</h2>
		</div>
}
	// if we can't the product ^ send this message 

	if (!isLoading) {
		return <div className="center">
		<h2>loading</h2>
		</div>
	}

	return (
		// if we find the place, we want to display the form and initialize the values from that submitted form 
		// the form is only rendered if we have a title value 
		<form className='place-form' onSubmit={productUpdateSubmitHandler }>
			<Input id='title' 
			element="input" 
			type="text" 
			label="Title" 
			validators={[VALIDATOR_REQUIRE]}
			errorText="please enter a valid title!"
			onInput={inputHandler}
			initialValue={formState.inputs.title.value}
			initialValid={formState.inputs.title.value.isValid}
			/>
			<Input id='description' 
			element="textarea" 
			label="Description" 
			validators={[VALIDATOR_MINLENGTH(5)]}
			errorText="please enter a valid description!"
			onInput={inputHandler}
			initialValue={formState.inputs.description.value}
			initialValid={formState.inputs.title.isValid}
			/>
			<Button type='submit' disabled={!formState.isValid}>update product</Button>
		</form>
	)
}
