import { useState } from 'preact/hooks'
import stave from './assets/stave.svg'
import crotchet from './assets/crotchet.svg'
import './app.css'

export function App() {
  let notes: string[] = ["noteLowE","noteLowF", "noteG", "noteA", "noteB", "noteC", "noteD", "noteHighE", "noteHighF"]
  
  let [count, setCount] = useState(0)

  function nextNote() {
    if (count < notes.length-1){
      return setCount(count + 1)
    } else {
      return setCount(0)
    }
  }

  return (
    <>
      <div id="parent">
        
          <img src={stave} class="stave" alt="stave" />
          <img src={crotchet} class={notes[count]} alt="crotchet" />
        
      </div>
      <div class="card">
        <button onClick={() => nextNote()}>
          Click to change note
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}
