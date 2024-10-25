import './App.css'
import React, { useState } from 'react'
import sound from '/sound.mp3'

const App = () => {

  const [num, setNum] =useState(0)
  const[text, setText] = useState('')
  const[img, setImg] = useState(false)

  console.log(num);

  const minus = () => {
    if(num > 0) {
      setNum(num - 1) 
    }
  }
  
  const plus = () => {
    if (num < 10) {
      setNum(num + 1)
    }
  }
  const openImgPlaySound = () => {
    setImg(!img)
    const audio = new Audio(sound)
    audio.play()

  }

  return (

    <>
      <div className="box">
        <h4>{num}</h4>
        <button onClick={plus}>Добавить число</button>

        <button onClick={minus}>Убавить число</button>
        <button onClick={() => setNum(0)}>Обнулить число</button>

        {/* <button onClick={() => setNum(num * 2)}>Убавить число</button> */}
      </div>

      <div className="box">
        <h4>{text}</h4>
        <input type="text" value={text}  onChange={(e) => setText(e.target.value)}/>
      </div>

      <div className="box">
        <button onClick={openImgPlaySound}>Кликни на меня</button>
        {img && <img onClick={() => setImg(false)} src='https://img.championat.com/c/900x900/news/big/g/a/hasbik-bloger-hasbulla-magomedov_16670494621473779463.jpg'/>}
      </div>
    </>
  )
  
}

export default App