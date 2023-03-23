import { useState } from 'react'
import './App.css'
import memesData from './memesData'

function App() {
  const [meme, setMeme] = useState({
    topText:"",
    bottomText:"",
    memeImage:"https://i.imgflip.com/28j0te.jpg"
  })
  const memesArray = memesData.data.memes
  const randomNumber = Math.floor(Math.random()*memesArray.length)

  function generatePic(){
   
    setMeme(prevMeme =>({
      ...prevMeme,
      memeImage: memesArray[randomNumber].url
    }))
  }

  function handleChange(event){
    const{value, name} = event.target
    setMeme(prevMeme=>({
      ...prevMeme,
      [name]:value
    }))
  }
  return (
    <div className='main'>
      <div className='form'>
        <input className="input" type="text" placeholder='TopText'
               value={meme.topText} name="topText" onChange={handleChange}
        />
        <input className="input" type="text" placeholder='bottomText'
               value={meme.bottomText} name="bottomText" onChange={handleChange}
        />
        <button className='button' onClick={generatePic}>Get a new meme image</button> 
      </div>
      <div className="meme">
        <img className="image" src={meme.memeImage} alt="pic" />
        <h2 className='text top'>{meme.topText}</h2>
        <h2 className='text bottom'>{meme.bottomText}</h2>        
      </div>
    </div>
  )
}

export default App
