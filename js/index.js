import Controls from './controls.js' 
import Timer from './timer.js'
import { elements } from './elements.js'
import Sound from './sounds.js'

const sound = Sound()

const {
  bttnPause,
  bttnPlay,
  bttnSet,
  bttnSoundOff,
  bttnSoundOn,
  bttnStopTimer,
  minutesDisplay,
  secondsDisplay
} = elements

const controls = Controls({ 
  bttnPause,
  bttnPlay,
  bttnSet,
  bttnStopTimer
})
 
const timer = Timer({ 
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
  
})


bttnPlay.addEventListener('click', function() {

  controls.play()

  timer.countdown()
  sound.pressButton()
})

bttnPause.addEventListener('click', () => { 
  controls.pause()
  timer.hold()
  sound.pressButton()
})

bttnStopTimer.addEventListener('click', () => { 
  controls.reset()
  timer.reset()
  sound.pressButton()
})


bttnSoundOn.addEventListener('click', () => { 
  bttnSoundOff.classList.remove('hide')
  bttnSoundOn.classList.add('hide')
  sound.bgAudio.play()
})

bttnSoundOff.addEventListener('click', () => { 
  bttnSoundOn.classList.remove('hide')
  bttnSoundOff.classList.add('hide')
  sound.bgAudio.pause()
})

bttnSet.addEventListener('click', () => { 
  let newMinutes = controls.getMinutes()
  if(!newMinutes) { 
    timer.reset()
    return
  }



  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
  
  
  
})

