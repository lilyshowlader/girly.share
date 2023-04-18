import React from 'react'
import './UsersList.css'
import UserProduct from './UserProduct'
import Card from '../../shared/components/UIElements/Card'
function UsersList (props) {
  // products will be an array of objects, if there are 0 products, there is not a user yet.
  if (props.users.length === 0) {
    return (
      <div className='center'>
        <Card>
      <h2> No users found </h2>
      </Card>
      </div>  
    )
  }
  // if there is a user, display their image, name, product count etc. 
  else {
    return <ul className='users-list'>
      {props.users.map(user => (
      <UserProduct 
      key={user.id} 
      id={user.id} 
      image={user.image} 
      name={user.name} 
      productCount={user.product}/>
      ))}
      </ul>
  }


}

export default UsersList