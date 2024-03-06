import React from 'react'
import { useState } from 'react'
import './Clue.css'
import Final from './Final';

const Clue = () => {
  const [code, setCode] = useState('');
  const [valid, setValid] = useState(false);
  const [reveal, Reveal] = useState(false);
  const drow = "1234";

  const checkCode = () => {
    if(code == drow) {
      setValid(false);
      Reveal(true);
      console.log(code);
      console.log("Correct");
    }
    else {
      console.log(code);
      setValid(true);
    }
  }
  
  return (
    (!reveal) ? (
    <section className='clue-section'>
      <div className='clue-container'>
        <div className='clue-head'>
          <h3>Can You able to Decode ??  :D</h3>
        </div>
        <div className='clue-label'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit totam adipisci nemo. Dolorum labore omnis cum officia, sit nostrum, eius quidem sequi modi tempora culpa voluptatum repellendus dolore at rem!
          </p>
        </div>
        <div className='clue-input'>
          <input type='text' value={code} onChange={(e) => setCode(e.target.value)}/>
          {(valid) && <span className='log'><span style={{fontWeight: "bold"}}>ⓘ</span> Incorrect PIN</span>}
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
