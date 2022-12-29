import React from 'react'
import troll from "./img/troll-face.png"

export default function Header() {
  return (
    <div>
        <nav className='navbar'>
            <img className='nav--image' src={troll} alt='animated funny face' ></img>
        <h1 className='nav--title'>Meme Generator</h1>
        <h3 className='nav--proj'>React Project 3</h3>
        </nav>
    </div>
  )
}
