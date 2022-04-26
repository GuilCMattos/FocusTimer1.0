export default function Controls({
  bttnPause,
  bttnPlay,
  bttnSet,
  bttnStopTimer
}) {
  
  function play() { 
    bttnPlay.classList.add('hide')
    bttnPause.classList.remove('hide')
    bttnStopTimer.classList.remove('hide')
    bttnSet.classList.add('hide')
  }

  function pause() { 
    bttnPlay.classList.remove('hide')
    bttnPause.classList.add('hide')
  }

  function reset() {
    
    bttnSet.classList.remove('hide')
    bttnStopTimer.classList.add('hide')
    bttnPlay.classList.remove('hide')
    bttnPause.classList.add('hide')
  }

  function getMinutes() { 
    let newMinutes = Number(prompt('Quantos minutos você quer adicionar')) 
    if(!newMinutes) { 
      
      return false
    }
  
    return newMinutes
  }
  

  return { 
    reset,
    play,
    pause,
    getMinutes
  }
  
    
}



