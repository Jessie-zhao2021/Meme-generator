import { useState, useEffect } from 'react'
import Header from './Header.jsx'
import './App.css'

function App() {
  const [meme, setMeme] = useState({
    topText:"",
    bottomText:"",
    memeImage:"https://i.imgflip.com/28j0te.jpg"
  })
const[memesData, setMemesData]=useState([])

useEffect(()=>{
   fetch("https://api.imgflip.com/get_memes")
     .then(res=>res.json())
     .then(data=>setMemesData(data.data.memes))
},[])
// useEffect(() => {
//   async function getMemes() {
//       const res = await fetch("https://api.imgflip.com/get_memes")
//       const data = await res.json()
//       setMemeData(data.data.memes)
//   }
//   getMemes()
// }, [])

  const randomNumber = Math.floor(Math.random()*memesData.length)

  function generatePic(){
   
    setMeme(prevMeme =>({
      ...prevMeme,
      memeImage: memesData[randomNumber].url
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
      <Header />
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
