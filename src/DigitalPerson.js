import React, { useState } from 'react';
import './DigitalPerson.css';
function DigitalPerson() {
  const [message, setMessage] = useState('');
  
  const handleInput = (event) => {
    setMessage(event.target.value);
  };

  const handleSpeak = () => {
    // 此处可以调用语音合成 API，让数字人开始讲解
    alert(`数字人讲解: ${message}`);
  };

  return (
    <div className="digital-person">

      <h2>与数字人互动</h2>

      <input type="text" value={message} onChange={handleInput} placeholder="请输入问题或指令" />

      <div className="response-box">
        <p>数字人形象将显示在这里</p>
      </div>
      
      <button onClick={handleSpeak}>语音讲解</button>
    </div>
  );
}

export default DigitalPerson;
