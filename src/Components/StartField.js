import React, { useEffect } from 'react'
import 'D:/MyVSCodeProjects/React/mini-projects/src/Styles/StartField.css'

export default function StartField({setFirstName,setSecondName, setStep}) {
  
  useEffect(()=>{
    document.addEventListener('keyup', (e)=>{
      if(e.code == 'Enter'){
        setStep(1);
      }
    })
  }, [])
  
  return (
    <div className='mainContainer'>
      <h1>TIC-TAC-TOE</h1>
        <p>First player</p>
        <input onChange={(event)=>setFirstName(event.target.value)} placeholder='Enter first player name' />
        <p>Second player</p>
        <input onChange={(event)=>setSecondName(event.target.value)} placeholder='Enter second player name' />
        <button onClick={()=>setStep(1)} className='Start'>Start game</button>
    </div>
  )
}
