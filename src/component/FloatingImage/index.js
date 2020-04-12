import React from 'react';
import './index.less';

const FloatingImage = (props) => {
  const { position = [], size = 'default', delay } = props;
  const positionStyle = {
    left: `${position[0]}`,
    top: `${position[1]}`,
  }
  const delayConfig = {
    animationDelay: delay,
    WebkitAnimationDelay: delay
  }
  return (
    <div className="floating-image-container" style={positionStyle}>
      <div className={`floating-image ${size} ${props.className}`} style={delayConfig}></div>
    </div>
  )
}

export default FloatingImage;
