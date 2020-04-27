import React from 'react';
import wait from '../../assets/images/wait.png';
import './style.less';

export default function index({text}) {
  return (
    <div className="wait">
      <div className="wait-box">
        <div className="wait-icon">
          <img src={wait} alt=""  />
        </div>
        <div className="wait-text">{text}</div>
      </div>
    </div>
  )
}