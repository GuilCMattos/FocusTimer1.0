import Sounds from './sounds.js';
import Sound from './sounds.js'




export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) { 

  let timerTimeOut;
  let minutes = Number(minutesDisplay.textContent);

  function updateDisplay(newMinutes, seconds) { 
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
    
  }
  
  function reset() { 
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }
  
  
  function countdown() { 
    timerTimeOut = setTimeout(function() { // SetTimeout = Ele faz algo a cada tempo que coloca depois de vírgula, que no caso foi 1s
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
  
     
      updateDisplay(minutes, 0)
  
      if(isFinished) { 
  
        resetControls()
        updateDisplay()
        Sounds().timeEnd()
        return 
      }
    
  
      if(seconds <= 0) { 
        seconds = 60
        --minutes
      }
  
      
      updateDisplay(minutes, String(--seconds) )
      
      countdown()
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut) // A função clearTimeout pausa o setTimeout porém temos que colocar um ID (Variável)
  }
  
 return { 
   countdown,
   reset,
   updateDisplay,
   updateMinutes,
   hold,

 }
}



