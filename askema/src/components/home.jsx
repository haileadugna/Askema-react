import React from 'react'
import Header from './header'
import './home.css'
import Upper from './body/upper'
import About from './body/about'
import Footer from './footer'
import Cleints from './body/cleints'
import WhatWeDo from './body/whatwedo'
import Comment from './blog/comment'

export default function Home() {


    return (
      <div className='home'>
      
        <hr />
        <Upper/>
        <hr />
        <About/>

        <WhatWeDo/>

        <Cleints/>
        <hr />
        
        <Comment/>
        <div className='bg-white p-3' ></div>
      </div>
      
    )
  
}
