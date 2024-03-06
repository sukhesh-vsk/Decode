import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import './Validate.css';

const Validate = () => {
  const [key, setKey] = useState('');

  return (
    <section className='validate-section'>
      <div className='validate-label'>
        <p>Enter PIN number : </p>
      </div>
      <div className='validate-input'>
        <OtpInput
            value={key}
            onChange={setKey}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
        />
      </div>
    </section>
  )
}

export default Validate
