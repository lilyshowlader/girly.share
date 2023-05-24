import React from 'react'
import { useParams } from 'react-router-dom'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'


export default function UpdateProduct() {
// dummy data 
const USERS = [
	{id: 'userone', 
	name: 'lily howlader', 
	image: 'https://i.imgur.com/unL5G2S.jpg', 
	product: '4', 
	},

	{id: 'usertwo', 
	name: 'mia howlader', 
	image: 'https://i.imgur.com/aP3WpyJ.png', 
	product: '2'},

	{id: 'userthree', 
	name: 'maeby howlader', 
	image: 'https://i.imgur.com/migmPLs.png', 
	product: '3'},

	{id: 'userfour', 
	name: 'maya howlader', 
	image: 'https://i.imgur.com/w5oMp4q.png', 
	product: '7'},
]

	const productId = useParams().productId

	const identifiedProduct = USERS.find(p => p.id === productId)
	// go through all products and find the product where the ID is equal to productId

	if (!identifiedProduct) {
		return <div className="center">
			<h2>could not find product!</h2>
		</div>
	}
	// if we can't the product ^ send this message 

	return (
		// if we find the place, we want to display the form and initialize the values from that submitted form 
		<form>

		</form>
	)
}
