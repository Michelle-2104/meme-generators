import React from 'react'
import MemesData from './MemesData'

export default function Meme() {
const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/2d3al6.jpg") 

function getMemeImage() {
  const memesArray = MemesData.data.memes
  const randomNumber = Math.floor(Math.random() * memesArray.length)
  setMemeImage(memesArray[randomNumber].url)
}


  return (
    <main className='container'>
        <div className='form'>
            <input type='text' className='form--input'></input>
            <input type='text' className='form--input'></input>
            <button type='text' className='form--button'
            onClick={getMemeImage} >Get a new meme image</button>
        </div>
        <img src={memeImage} className="meme--image" />

     </main>
  )
}
