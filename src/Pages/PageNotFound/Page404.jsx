import React from 'react'
import './Page404.css'
import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div className='container-main d-flex flex-column justify-content-center align-items-center px-3'
    style={{height:'100vh'}}
    >
      <p className='para para1 mb-2'><sb>404</sb></p>
      <h1 className='m-3 heading text-center'
      style={{
        fontSize: 'clamp(48px, 8vw, 98px)',
        lineHeight: '1.1'
      }}
      >Page not found</h1>
      <p className='para para2 text-center mb-4'
      style={{
        fontSize: 'clamp(16px, 4vw, 25px)',
        maxWidth: '600px',
        lineHeight: '1.4'
      }}>🚧 This page is currently under development. Please check back soon!</p>
    <div className='link-div d-flex justify-content-center align-items-center flex-wrap' 
         style={{gap: 'clamp(10px, 3vw, 20px)'}} >
    <Link to='/' className='link home d-flex justify-content-center align-items-center' >Home</Link>
    <Link to='/contact' className='link support d-flex justify-content-center align-items-center' >Support</Link>
    </div>
    </div>
  )
}

export default Page404