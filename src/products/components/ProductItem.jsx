import React from 'react'
import './ProductItem.css'
import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'

export default function ProductItem(props) {
	return (
		<>

		<li className='product-item'>
		
		<Card className='product-item__content'>
		<div className='product-item_image'>
			<img src={props.image} alt={props.title} />
		</div>
		<div className='product-item__info'>
			<h2>{props.title}</h2>
			<h3>{props.description}</h3>
			<p>{props.link}</p>
		</div>
		<div className='product-item__actions'>
		<Button to={`/products/${props.id}`}>edit</Button>
			<Button>delete</Button>
		</div>
		</Card>
		
		</li>
		</>
	)
}
