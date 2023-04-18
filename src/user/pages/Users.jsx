import React from 'react'
import UsersList from '../components/UsersList'

function Users() {
  // dummy data 
  const USERS = [
    {id: 'userone', 
    name: 'lily howlader', 
    image: 'https://i.imgur.com/unL5G2S.jpg', 
    product: '4'},

    {id: 'usertwo', 
    name: 'mia howlader', 
    image: 'https://i.imgur.com/aP3WpyJ.png', 
    product: '2'},

    {id: 'userthree', 
    name: 'maeby howlader', 
    image: 'https://i.imgur.com/migmPLs.png', 
    product: '2'},

    {id: 'userthree', 
    name: 'maya howlader', 
    image: 'https://i.imgur.com/w5oMp4q.png', 
    product: '2'},
  ]

  return (
    <UsersList users={USERS}/>
  )
}

export default Users