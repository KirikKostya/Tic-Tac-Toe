import 'D:/MyVSCodeProjects/React/mini-projects/src/Styles/App.css';
import Field from './Field';
import Alert from './Alert';
import StartField from './StartField';
import React,{useState} from 'react' 


function App() {
  const [firstName, setFirstName] = useState('First player');
  const [secondName, setSecondName] = useState('Second player');
  const [winsOfFirstPlayer, setWinsOfFirstPlayer] = useState(0);
  const [winsOfSecondPlayer, setWinsOfSecondPlayer] = useState(0);
  const [Draws, setDraws] = useState(0);
  const [step, setStep] = useState(0);
  
  return (
    <div className="App">
      <header className="App-header">
        {
          (step == 0)

           ?<StartField setFirstName={setFirstName}
                        setSecondName={setSecondName}
                        setStep={setStep} />
          : (step == 1) 
          
           ? <Alert firstName={firstName}
                    secondName={secondName}
                    setStep={setStep}/>

          : <Field  winsOfFirstPlayer={winsOfFirstPlayer}
                    winsOfSecondPlayer={winsOfSecondPlayer}
                    Draws={Draws}
                    setWinsOfFirstPlayer={setWinsOfFirstPlayer}
                    setWinsOfSecondPlayer={setWinsOfSecondPlayer}
                    setDraws={setDraws}
                    firstName={firstName}
                    secondName={secondName} /> 
                          
        }
      </header>
    </div>
  );
}

export default App;
