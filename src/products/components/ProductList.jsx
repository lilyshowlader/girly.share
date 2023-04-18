import React from 'react'
import './ProductList.css'
import Card from '../../shared/components/UIElements/Card'
import ProductItem from './ProductItem'
import NewProduct from '../pages/NewProduct'



export default function ProductList(props) {
	if (props.product.length === 0) {
			return <div className='product-list-center'>
				<Card>
					<h2>no products found, let's create one!</h2>
					<button>share product</button>
				</Card>
			</div>
		}

	return <ul className='product-list'>
		{props.items.map(product => <ProductItem 
		key={product.id} 
		image={product.imageUrl} 
		title={product.title} 
		description={product.description} link={product.link} 
		creatorId={product.creator}/> )}
	</ul>
}
