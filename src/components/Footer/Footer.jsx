import React from 'react'

export const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <div>Copyright &copy; {year}</div>
  )
}
