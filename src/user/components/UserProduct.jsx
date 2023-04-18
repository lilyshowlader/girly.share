import React from 'react'
import './UserProduct.css'
import Avatar from '../../shared/components/UIElements/Avatar'
import Card from '../../shared/components/UIElements/Card'
import { Link } from 'react-router-dom'

function UserProduct (props) {
	return (
		<li className="user-item">
				<Card className="user-item__content">
				<Link to={`/${props.id}/places`}>
				<div className='user-item__image'>
					<Avatar image={props.image} alt={props.name}/> 
				</div>
				<div className='user-item__info'>
					<h2>{props.name}</h2>
					<h5>{props.productCount} {props.placeCount === 1 ? 'product' : 'products'}</h5>
				</div>
				</Link>
				</Card>
		</li>
	)

}

export default UserProduct
