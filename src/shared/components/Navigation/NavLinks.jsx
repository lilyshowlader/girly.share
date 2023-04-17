import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavLinks.css'

export default function NavLinks(props) {
	return (
		<ul className='nav-links'>
			<li>
				<NavLink to='/' exact>all users</NavLink>
			</li>
			<li>
				<NavLink to='/u1/places'>my products</NavLink>
			</li>
			<li>
				<NavLink to='/products/new'>add product</NavLink>
			</li>
			<li>
				<NavLink to='/auth'>authenticate</NavLink>
			</li>
			
		</ul>
	)
}
