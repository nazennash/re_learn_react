import React from 'react'
import { Contact } from '../components/Contact/Contact'
import data from '../data.js'

export const Home = () => {

  const place = data.map((item) => {
    return <Contact key={item.id} item={item} />
  })

  const newPlace = data.map((item) => {
    return <Contact key={item.id} item={item} />
  })

  return (
    <>
    <div style={{color: 'red'}}>{place}</div>
    <div>{newPlace}</div>
    </>
  )
}
