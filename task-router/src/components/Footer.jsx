import React from 'react'
import { Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <Navbar className="justify-content-center bg-dark p-4 text-light fixed-bottom">
        <p > Copyright {new Date().getFullYear()} </p>
        <p></p>
      </Navbar>
    </div>
  )
}

export default Footer