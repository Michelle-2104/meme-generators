import React from 'react'
import troll from "./img/troll-face.png"

export default function Header() {
  return (
   
        <nav className='navbar'>
            <img className='nav--image' src={troll} alt='animated funny face' ></img>
        <h1 className='nav--title'>Meme Generator</h1>
        <h4 className='nav--proj'>React Project </h4>
        </nav>
   
  )
}
