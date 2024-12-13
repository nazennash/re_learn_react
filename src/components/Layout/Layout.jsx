import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import './Layout.css'

export const Layout = (props) => {
  return (
    <div className='layout-container'>
      <Header />
        <main className="content">{props.children}</main>
      <Footer />
    </div>
  )
}
