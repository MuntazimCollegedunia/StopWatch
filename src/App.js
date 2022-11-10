import React, {useState} from 'react';
import Display from './Components/Display';
import Button from './Components/Button';
import './App.css';

function App() {
  const[time, setTime] = useState({ms:0,s:0,m:0,h:0});
  const[interv, setInterv] = useState();

  const start = () =>{
    setInterv(setInterval(run, 10));
  }
  
  let updateH = time.h, updateM = time.m, updateS = time.s, updateMs = time.ms;
  const run = () =>{
    if(updateM === 60)
    {
      updateH++;
      updateM = 0;
    }
    if(updateS === 60)
    {
      updateM++;
      updateS = 0;
    }
    if(updateMs === 99)
    {
      updateS++;
      updateMs = 0;
    }
    else{
      updateMs++;
    }
    
    return setTime({ms:updateMs,s:updateS,m:updateM,h:updateH});
  } 

  const stop = () =>{
    clearInterval(interv);
  }

  const reset = () =>{
    clearInterval(interv);
    setTime({ms:0,s:0,m:0,h:0});
  }
  
  return (
    <div className="App">
      <div className="main">
        <Display time={time} />
        <Button start={start} stop={stop} reset={reset}/>
      </div>
    </div>
  );
}

export default App;
