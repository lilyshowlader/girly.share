import React from 'react'
import '/.ProductList.css'
import Card from '../../shared/components/UIElements/Card'


export default function ProductItem(props) {
	return (
		<>

		<li className='product-item'>
		
		<Card>
		<div className='product-item_image'>
			<img src={props.image} alt={props.title} />
		</div>
		<div className='product-item__info'>
			<h2>{props.title}</h2>
			<h3>{props.description}</h3>
			<p>{props.link}</p>
		</div>
		<div className='product-item__actions'>
			<button>edit</button>
			<button>delete</button>
		</div>
		</Card>
		
		</li>
		</>
	)
}
