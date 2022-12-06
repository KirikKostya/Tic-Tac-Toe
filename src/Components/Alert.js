import React, {useEffect} from 'react'
import '../Styles/Alert.css'

export default function Alert({firstName, secondName, setStep}) {
  
  useEffect(()=>{
    document.addEventListener('keyup', (e)=>{
      if(e.code == 'Enter'){
        setStep(2);
      }
    })
  }, [])
  
  return (
    <div className='AlertContainer'>
        <div className='info'> 
            <div className='Player'>
                <h1>{firstName} plays:</h1>
                <div className='cross'></div>
            </div>
            <div className='Player'>
                <h1>{secondName} plays:</h1>
                <div className='circle'></div>
            </div>
        </div>
        <button onClick={()=>setStep(2)} className='Start'>Start game</button>
    </div>
  )
}
