import { useState } from 'react'
import './App.css'
import memesData from './memesData'

function App() {
  const [url, setUrl] = useState("")
  const memesArray = memesData.data.memes
  const randomNumber = Math.floor(Math.random()*memesArray.length)

  function generatePic(){
    setUrl(memesArray[randomNumber].url)
  }
  return (
    <div className='form'>
       <input className="input" type="text" placeholder='TopText'/>
       <input className="input" type="text" placeholder='bottomText'/>
       <button className='button' onClick={generatePic}>Get a new meme image</button> 
       <img className="image" src={url} alt="pic" />
    </div>
  )
}

export default App
