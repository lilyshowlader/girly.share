import React from 'react'
import ProductList from '../../products/components/ProductList'

export default function UserProducts() {
	const DUMMY_PRODUCTS = [ 
		{
			id: 'p1',
			title: 'mirena',
			description: 'low dose hormonal birth control',
			imageUrl: 'https://i.imgur.com/FRvy3sb.png',
			creator: 'u1'
		},

		{
			id: 'p2',
			title: 'nuvaring',
			description: 'low dose hormonal birth control',
			imageUrl: 'https://i.imgur.com/p9WwwKV.png',
			creator: 'u2'
		},

		{
			id: 'p3',
			title: 'cora tampons',
			description: 'organic cotton tampons',
			imageUrl: 'https://i.imgur.com/mzJlcuB.png',
			creator: 'u3'
		},
	]
	
	return (
		<ProductList products={DUMMY_PRODUCTS} />
	)
}
