import React from 'react'
import UsersList from '../components/UsersList'

function Users() {
  // dummy data 
  const USERS = [
    {id: 'userone', 
    name: 'Lily Howlader', 
    image: 'https://i.imgur.com/unL5G2S.jpg', 
    item: '4'},

    {id: 'usertwo', 
    name: 'Mia Howlader', 
    image: 'https://i.imgur.com/unL5G2S.jpg', 
    item: '2'},

    {id: 'userthree', 
    name: 'Maeby Howlader', 
    image: 'https://i.imgur.com/unL5G2S.jpg', 
    item: '2'},

    {id: 'userthree', 
    name: 'Maya Howlader', 
    image: 'https://i.imgur.com/unL5G2S.jpg', 
    item: '2'},
  ]

  return (
    <UsersList items={USERS}/>
  )
}

export default Users