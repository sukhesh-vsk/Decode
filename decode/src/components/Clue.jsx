import React from 'react'
import { useState } from 'react'
import './Clue.css'
import Final from './Final';

const Clue = () => {
  const [code, setCode] = useState('');
  const [valid, setValid] = useState(false);
  const [reveal, Reveal] = useState(false);
  const drow = "LIBRARY";

  const checkCode = () => {
    if(code == drow) {
      setValid(false);
      Reveal(true);
      console.log(code);
      console.log("Correct");
    }
    else {
      setCode("");
      setValid(true);
    }
  }
  
  return (
    (!reveal) ? (
    <section className='clue-section'>
      <div className='clue-container'>
        <div className='clue-head'>
          <h3>Unravel the Secret: Your Last Clue Awaits, Decode for Victory!</h3>
        </div>
        <div className='clue-label'>
          <p>
            You Are in the final cLue. If you cannot find it out Read the sentence again Buddy. if you have found Run towards it.
          </p>
        </div>
        <div className='clue-input'>
          <input type='text' value={code} onChange={(e) => setCode(e.target.value)}/>
          {(valid) && <span className='log' style={{animation: 'shake 0.5s'}}><span style={{fontWeight: "bold"}}>ⓘ</span> Incorrect PIN</span>}
        </div>
        <div className='clue-btn'>
          <button onClick={checkCode}>
            Enter
          </button>
        </div>
      </div>
    </section> ) : (<Final />) 
  )
}

export default Clue
