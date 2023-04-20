import React from 'react'
import ProductList from '../../products/components/ProductList'
import { useParams } from 'react-router-dom'

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

export default function UserProducts() {
	const userId = useParams().userId
	const loadedProducts = DUMMY_PRODUCTS.filter(product => product.creator === userId)
	
	console.log(loadedProducts)
	return (
		<ProductList products={loadedProducts} />
	)
}