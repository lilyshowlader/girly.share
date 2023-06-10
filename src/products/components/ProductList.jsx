import React from 'react'
import './ProductList.css'
import Card from '../../shared/components/UIElements/Card'
import ProductItem from './ProductItem'
import UserProducts from '../pages/UserProducts'



export default function ProductList(props) {
	console.log(props)
	if (props.products.length === 0) {
			return <div className='product-list-center'>
				<Card>
					<h2>no products found, let's create one!</h2>
					<button>share product</button>
				</Card>
			</div>
		}

	return <ul className='product-list'>
		{props.products.map(product => <ProductItem 
		key={product.id} 
		id={product.id}
		image={product.imageUrl} 
		title={product.title} 
		description={product.description} link={product.link} 
		creatorId={product.creator}/> )}
	</ul>
}
