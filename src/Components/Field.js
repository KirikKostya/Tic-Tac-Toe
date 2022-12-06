import React, { useState, useEffect } from 'react';
import 'D:/MyVSCodeProjects/React/mini-projects/src/Styles/Field.css';
import ScoreTable from './ScoreTable';

export default function Field({firstName, secondName, winsOfFirstPlayer, winsOfSecondPlayer, Draws, setWinsOfFirstPlayer, setWinsOfSecondPlayer, setDraws}) {
    let [queue, setQueue] = useState(0);
    let step = 0;

    useEffect(()=>{
        const blocks = document.querySelectorAll('.item');
        
        for(let item of blocks){
            item.addEventListener('click', () => {
            if(item.classList.contains('circle') 
                || item.classList.contains('cross')){
                    return;
            } else {
                if(step%2==0){
                item.classList.remove('cross')
                item.classList.add('circle');
                } else {
                    item.classList.remove('circle');
                    item.classList.add('cross');
                }
            step++;
            setQueue(step)
            }
            
            })
        
        
        }
    }, [])

const checkGame = () => {
    let conteinerForItems = document.querySelectorAll('.item');
    
    let list = conteinerForItems;
        
      if(  list[0].classList.contains('circle')
        && list[1].classList.contains('circle')
        && list[2].classList.contains('circle')
        
        ||

           list[0].classList.contains('circle')
        && list[3].classList.contains('circle')
        && list[6].classList.contains('circle')

        ||

           list[0].classList.contains('circle')
        && list[4].classList.contains('circle')
        && list[8].classList.contains('circle')

        ||

           list[3].classList.contains('circle')
        && list[4].classList.contains('circle')
        && list[5].classList.contains('circle')

        ||

           list[2].classList.contains('circle')
        && list[4].classList.contains('circle')
        && list[6].classList.contains('circle')

        ||

           list[6].classList.contains('circle')
        && list[7].classList.contains('circle')
        && list[8].classList.contains('circle')

        ||

           list[1].classList.contains('circle')
        && list[4].classList.contains('circle')
        && list[7].classList.contains('circle')

        ||

           list[6].classList.contains('circle')
        && list[7].classList.contains('circle')
        && list[8].classList.contains('circle')

        ||

           list[2].classList.contains('circle')
        && list[5].classList.contains('circle')
        && list[8].classList.contains('circle')


        ){
            setWinsOfFirstPlayer(++winsOfFirstPlayer);
            for(let i=0; i<conteinerForItems.length; i++){
                conteinerForItems[i].classList.remove('circle');
                conteinerForItems[i].classList.remove('cross');
                // setQueue(0)
                step++
            }
         } else if(
           list[0].classList.contains('cross')
        && list[1].classList.contains('cross')
        && list[2].classList.contains('cross')
            
            ||
    
           list[0].classList.contains('cross')
        && list[3].classList.contains('cross')
        && list[6].classList.contains('cross')
    
            ||
    
           list[0].classList.contains('cross')
        && list[4].classList.contains('cross')
        && list[8].classList.contains('cross')
    
            ||
    
           list[3].classList.contains('cross')
        && list[4].classList.contains('cross')
        && list[5].classList.contains('cross')
    
            ||
    
           list[2].classList.contains('cross')
        && list[4].classList.contains('cross')
        && list[6].classList.contains('cross')
    
            ||
    
           list[6].classList.contains('cross')
        && list[7].classList.contains('cross')
        && list[8].classList.contains('cross')
    
            ||
    
           list[1].classList.contains('cross')
        && list[4].classList.contains('cross')
        && list[7].classList.contains('cross')
    
            ||
    
           list[6].classList.contains('cross')
        && list[7].classList.contains('cross')
        && list[8].classList.contains('cross')
    
            ||
    
           list[2].classList.contains('cross')
        && list[5].classList.contains('cross')
        && list[8].classList.contains('cross')
          ){
            setWinsOfSecondPlayer(++winsOfSecondPlayer);
            for(let i=0; i<conteinerForItems.length; i++){
                conteinerForItems[i].classList.remove('circle');
                conteinerForItems[i].classList.remove('cross');
                // setQueue(0);
                step++;
            }
          }else {
            setDraws(++Draws);
            for(let i=0; i<conteinerForItems.length; i++){
                conteinerForItems[i].classList.remove('circle');
                conteinerForItems[i].classList.remove('cross');
                // setQueue();
                step++
            }
          }
    
}
  return (
    <div>
        
        <div id='mainField'>
        <ScoreTable    firstName={firstName} 
                       secondName={secondName} 
                       Draws={Draws}
                       winsOfFirstPlayer={winsOfFirstPlayer}
                       winsOfSecondPlayer={winsOfSecondPlayer} />
            <div className='lineField'>
                <li><div className='item' /></li>
                <li><div className='item' /></li>
                <li><div className='item' /></li>
            </div>
            <div className='lineField'>
                <li><div className='item' /></li>
                <li><div className='item' /></li>
                <li><div className='item' /></li>
            </div>
            <div className='lineField'>
                <li><div className='item' /></li>
                <li><div className='item' /></li>
                <li><div className='item' /></li>
            </div>
        </div>
        {
            queue%2==0 
                ? <div id='step'><p>next step: </p><div className='stepCircle'/></div>
                : <div id='step'><p>next step: </p><div className='stepCross'/></div>
        }

        <button onClick={checkGame} className='Check'>Check</button>
    </div>
  )
}
