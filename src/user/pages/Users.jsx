import React from 'react'
import UsersList from '../components/UsersList'

function Users() {
  // dummy data 
  const USERS = [
    {id: 'userone', 
    name: 'Lily', 
    image: 'https://i.imgur.com/unL5G2S.jpg', 
    item: '4'}
  ]

  return (
    <UsersList items={USERS}/>
  )
}

export default Users