import React from 'react'
import { useParams } from 'react-router-dom'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators'
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

const productId = useParams().productId;

const identifiedProduct = DUMMY_PRODUCTS.find(p => p.id === productId);


	// go through all products and find the product where the ID is equal to productId

	if (!identifiedProduct) {
		return <div className="center">
			<h2>could not find product!</h2>
		</div>
	}
	// if we can't the product ^ send this message 

	return (
		// if we find the place, we want to display the form and initialize the values from that submitted form 
		<form className='place-form'>
			<Input id='title' 
			element="input" 
			type="text" 
			label="Title" 
			validators={[VALIDATOR_REQUIRE]}
			errorText="please enter a valid title!"
			onInput={() => {}}
			value={identifiedProduct.title}
			valid={true}
			/>
			<Input id='description' 
			element="textarea" 
			label="Description" 
			validators={[VALIDATOR_MINLENGTH(5)]}
			errorText="please enter a valid description!"
			onInput={() => {}}
			value={identifiedProduct.description}
			valid={true}
			/>
			<Button type='submit' disabled={true}>update place</Button>
		</form>
	)
}
