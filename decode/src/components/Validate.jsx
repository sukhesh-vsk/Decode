import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import './Validate.css';

const Validate = () => {
  const [key, setKey] = useState('');

  return (
    <section className='validate-section'>
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
          </div>
        </div>
        <div>
          <button className='validate-button'>Enter</button>
        </div>
      </div>
    </section>
  )
}

export default Validate
