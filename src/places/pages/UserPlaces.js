import React from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'


const DUMMY = [
   {
        id: 'p1',
        title: 'Empire State Building',
        description: 'A famous place',
        imageUrl: 'https://imgs.search.brave.com/y8m0zPAggkrJ7wgXAuanDFJYFERm5dnsGbZhyYRjx8s/rs:fit:355:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5r/MjZKYVlfTmtLRHZv/MWhMQ0FVQzFBSGFK/NCZwaWQ9QXBp',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'A famous place',
        imageUrl: 'https://imgs.search.brave.com/y8m0zPAggkrJ7wgXAuanDFJYFERm5dnsGbZhyYRjx8s/rs:fit:355:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5r/MjZKYVlfTmtLRHZv/MWhMQ0FVQzFBSGFK/NCZwaWQ9QXBp',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    }

]

const UserPlaces = () => {
    const {userId} = useParams()
    const loadedPlaces = DUMMY.filter(place => place.creator === userId)
  return (
    <PlaceList items={loadedPlaces} />
    
  )
}

export default UserPlaces