import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import './Validate.css';
import Clue from './Clue';

const Validate = () => {
  const [key, setKey] = useState('');
  const atad = "1234";
  const [navigate, makeNavigate] = useState(false);
  const [valid, setValid] = useState(false);
  const makeValidate = () => {
    sendData()
  }

  const sendData = () => {
    if(key == atad) {
      console.log("Correct");
      makeNavigate(true);
    }
    else {
      setKey("");
      setValid(true);
    }
  }

  return (
    (!navigate) ? 
    (<section className='validate-section'>
      <div className='card'>
        <div className='val'>
          <div className='validate-label'>
            <p>Enter PIN number : </p>
          </div>
          <div className='validate-input'>
            <OtpInput
                value={key}
                onChange={setKey}
                numInputs={4}
                inputType='tel'
                renderSeparator={<span className="sep">-</span>}
                renderInput={(props) => <input {...props} className="input-field"/>}
            />
            {(valid) && <span className='log'><span style={{fontWeight: "bold"}}>ⓘ</span> Incorrect PIN</span>}
          </div>
        </div>
        <div>
          <button className='validate-button' onClick={makeValidate}>Enter</button>
        </div>
      </div>
    </section> ) : (<Clue />)
  )
}

export default Validate
