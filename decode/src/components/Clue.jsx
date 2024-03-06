import React from 'react'
import './Clue.css'

const Clue = () => {
  return (
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
          <input type='text' />
        </div>
        <div className='clue-btn'>
          <button>
            Enter
          </button>
        </div>
      </div>
    </section>
  )
}

export default Clue
