import React from 'react'
import 'D:/MyVSCodeProjects/React/mini-projects/src/Styles/ScoreTable.css'

export default function ScoreTable({firstName, secondName, winsOfFirstPlayer, Draws,winsOfSecondPlayer}) {
  return (
    <div className='mainContainer'>
    <h1>TIC-TAC-TOE</h1>
        <div className='containerForResults'>
          <div className='Player'>
            <h2>{firstName}</h2><h3>{winsOfFirstPlayer}</h3>
          </div>
          <div className='Player'>
            <h2>Draws</h2><h3>{Draws}</h3>
          </div>
          <div className='Player'>
            <h2> {secondName}</h2> <h3>{winsOfSecondPlayer}</h3>
          </div>
        </div>
    </div>
  )
}
